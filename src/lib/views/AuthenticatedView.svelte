<script lang="ts">
  import { onDestroy, type Snippet } from 'svelte';
  import Button from '../elements/Button.svelte'
  import MFAChallengeView from './MFAChallengeView.svelte'
  import AddMFAView from './AddMFAView.svelte'
  import LinkButton from '../elements/LinkButton.svelte'
  import InputWrapper from '../elements/InputWrapper.svelte'
  import type { Factor, Provider, SupabaseClient, User, UserIdentity } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import { messages } from '$lib/messages.svelte';
  import Accordion from '$lib/components/Accordion.svelte';
  import { needsMFAChallenge, user, saOptions, email, emailLinkSent, socialSettings } from '$lib/stores.svelte'
  import { isElevationError } from '$lib/utils/aal2';
  import SocialAuthView from './SocialAuthView.svelte';
  import PasswordChangeView from './PasswordChangeView.svelte';

  type UserIdentityWithEmail = UserIdentity & { email?: string }

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    locale?: string
    providers?: Provider[]
    signedInAs?: Snippet<[User|null]>|undefined
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
    userInfo?: Snippet<[User|null]>
  }

  let { InputWrapper: Wrapper, supabaseClient, signedInAs, providers, getText, locale, userInfo }: Props = $props()

  let loading = $state(false)
  let mfaRequired = $state(false)
  let factors = $state<Factor[]>([])
  let verifiedFactors = $derived(factors.filter(factor => factor.status === 'verified'))
  let showAddMFA = $state(false)
  let showPasswordChange = $state(false)
  let showNetworkError = $state(false)

  let identities:UserIdentityWithEmail[] = $state([])

  // Check MFA status when component mounts
  $effect(() => {
    checkMFAStatus()
    getIdentities()
  })

  async function getIdentities() {
    const { data, error } = await supabaseClient.auth.getUserIdentities()
    if (error) throw error
    identities = data.identities
  }

  async function checkMFAStatus() {
    if (!$user || $user.is_anonymous) {
      mfaRequired = false
      $needsMFAChallenge = false
      showNetworkError = false
      return
    }

    try {
      // Check if user has any enrolled factors
      const { data: factorsData, error: factorsError } = await supabaseClient.auth.mfa.listFactors()

      if (factorsError) {
        throw new Error(`Failed to load MFA factors: ${factorsError.message}`)
      }

      factors = factorsData?.all.sort((a, b) => b.created_at < a.created_at ? 1 : -1) ?? []

      // Check current AAL
      const { data: aalData, error: aalError } = await supabaseClient.auth.mfa.getAuthenticatorAssuranceLevel()

      if (aalError) {
        throw new Error(`Failed to check authentication level: ${aalError.message}`)
      }

      if (!aalData) {
        throw new Error('Authentication level data not available')
      }

      const hasVerifiedFactors = verifiedFactors.length > 0
      const isAAL1 = aalData.currentLevel === 'aal1'
      const canUpgradeToAAL2 = aalData.nextLevel === 'aal2'

      // AAL2 (Multi-Factor Authentication) behavior:
      // - AAL2 expires after a session timeout (typically 1-2 hours of inactivity)
      // - When AAL2 expires, user drops back to AAL1 but stays logged in
      // - If user has MFA factors and is at AAL1 but can upgrade to AAL2, they need MFA challenge
      // - This is normal behavior and not overly aggressive - users aren't challenged on every page load
      // - Only challenged when their AAL2 has actually expired due to timeout
      $needsMFAChallenge = (hasVerifiedFactors && isAAL1 && canUpgradeToAAL2) ? 'toLogin' : false

      // User needs to enroll MFA if they're new, have no verified factors, and MFA is required
      const isNewUser = !hasVerifiedFactors
      mfaRequired = isNewUser && $saOptions.auth.mfa.required || false

      // Clear any previous network errors
      showNetworkError = false

    } catch (error) {
      console.warn('MFA status check failed:', error)

      // If we have verified factors but can't check AAL, show MFA challenge
      // This allows users to still authenticate even if AAL check fails
      if (verifiedFactors.length > 0) {
        $needsMFAChallenge = 'toLogin'
        mfaRequired = false
        showNetworkError = false
      } else {
        // If we can't determine anything, show network error with options
        showNetworkError = true
      }
    }
  }

  async function handleSignOut() {
    loading = true
    messages.clear()

    const { error: signOutError } = await supabaseClient.auth.signOut()
    if (signOutError) {
      messages.add('error', signOutError.message)
    }
    $email = ''
    $emailLinkSent = null
    loading = false
  }

  async function deleteFactor(factor: any) {
    const canDelete = !$saOptions?.auth?.mfa?.required || verifiedFactors.length > 1 || factor.status === 'unverified'

    if (!canDelete) {
      messages.add('error', getText('mfaNoDeleteError'))
      return
    }

    if (!confirm(getText('mfaDeleteFactorConfirmation', { name: factor.friendly_name ?? factor.factor_type.toUpperCase() }))) return

    loading = true
    messages.clear()

    try {
      const { error: unenrollError } = await supabaseClient.auth.mfa.unenroll({
        factorId: factor.id
      })

      if (unenrollError) {
        // Check for AAL2 requirement on unenroll
        if (isElevationError(unenrollError)) {
          $needsMFAChallenge = 'toElevate'
          return
        }
      }

      // Refresh MFA status
      await checkMFAStatus()
    } catch (err) {
      // Additional check for AAL2 errors in catch block
      if (isElevationError(err)) {
        $needsMFAChallenge = 'toElevate'
        return
      }
      messages.add('error', err instanceof Error ? err.message : 'Failed to remove factor')
    } finally {
      loading = false
    }
  }

  async function unlinkIdentity(identity:UserIdentityWithEmail) {

    if (!confirm(getText('socialUnlinkIdentityConfirmation', { provider: identity.provider, email: identity.identity_data?.email ?? identity.email ?? '' }))) return

    loading = true
    messages.clear()

    try {
      const { error: unlinkError } = await supabaseClient.auth.unlinkIdentity(identity)
      if (unlinkError) throw unlinkError
    } catch (err) {
      messages.add('error', err instanceof Error ? err.message : 'Failed to unlink identity')
    } finally {
      await getIdentities()
      loading = false
    }

  }

  async function beginPasswordChange() {
    // TODO: Implement functionality for changing the user's password (or setting one, if there is none).
    const { data, error } = await supabaseClient.auth.reauthenticate()
    messages.clear()
    showPasswordChange = true
  }

  function formatDate(dateStr?:string, asTime:boolean=false): string {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleString(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: asTime ? 'numeric' : undefined,
      minute: asTime ? '2-digit' : undefined,
      second: asTime ? '2-digit' : undefined,
    })
  }

  onDestroy(()=>{
    messages.clear()
  })
</script>

<div class="sA-authenticated-view">

{#if showNetworkError}
  <!-- Network/Server Error Screen -->
  <p class="danger">{getText('networkError')}</p>

  <Button block size="medium" {loading} onclick={handleSignOut}>
    {getText('signOutButton')}
  </Button>
{:else if $needsMFAChallenge}
  <!-- User has MFA factors and needs to complete MFA challenge -->
  <MFAChallengeView bind:processing={$needsMFAChallenge} InputWrapper={Wrapper} {supabaseClient} {getText} />
{:else if showPasswordChange}
  <PasswordChangeView
    bind:processing={showPasswordChange}
    InputWrapper={Wrapper}
    {supabaseClient}
    {getText}
  />
{:else if showAddMFA}
  <!-- Add MFA Factor View -->
  <AddMFAView
    bind:processing={showAddMFA}
    defaultFriendlyName={verifiedFactors.length ? `${getText('backupText', { count: factors.length })}` : 'TOTP'}
    InputWrapper={Wrapper}
    {supabaseClient}
    {getText}
  />
{:else if mfaRequired}
  <!-- User is new and MFA is required - redirect to enrollment -->
  <div>
    <p>{getText('mfaRequired')}</p>

    <Button
      block
      primary
      size="large"
      onclick={() => showAddMFA = true}
    >
      {getText('mfaAddFactorLink')}
    </Button>
  </div>
{:else}
  <!-- User is fully authenticated -->
    <div class="sA-user-info">
      {#if signedInAs}
        {@render signedInAs($user)}
      {:else}
        <p dir="auto">
          {getText('signedIn')}
          {#if $user?.email}
            <br/>{getText('signedInEmail', { email: $user?.email ?? ''})}
          {/if}
          {#if $user?.created_at}
            <br/>{getText('createdTime', { time: formatDate($user?.created_at, true) })}
          {/if}
          {#if $user?.last_sign_in_at}
            <br/>{getText('signedInTime', { time: formatDate($user?.last_sign_in_at, true) })}
          {/if}
        </p>
      {/if}
    </div>

    {#if userInfo}
      {@render userInfo($user)}
    {/if}

    <!-- Account Security -->
    <Accordion title={getText('accountSecurityHeading')}>
      <Button block size="medium" onclick={beginPasswordChange}>
        {getText('pwChange')}
      </Button>
    </Accordion>

    <!-- External Providers List -->
    {#if providers?.length}
      <Accordion title={getText('providersListHeading') + ` (${identities?.length ?? '0'})`}>
        {#if identities.length === 0}
          <p>{getText('noProviders')}</p>
        {:else}
          <ul>
            {#each identities as identity}
              {@const email = identity?.identity_data?.email ?? identity?.email ?? ''}
              <li class="flex" aria-label={getText('linkedAccountLabel', { provider: identity.provider })}>
                <span>
                  {identity.provider} ({email})
                  <br>
                  {getText('createdTime', { time: formatDate(identity?.created_at, true) })}
                  <br>
                  {getText('signedInTime', { time: formatDate(identity?.last_sign_in_at, true) })}
                </span>
                {#if $saOptions.auth.enable_manual_linking && identities.length > 1}
                  <LinkButton
                    large
                    aria-label={getText('deleteLinkedAccountLabel', { provider: identity.provider, email })}
                    class="danger"
                    onclick={() => unlinkIdentity(identity)}
                  >
                    &cross;
                  </LinkButton>
                {/if}
              </li>
            {/each}
          </ul>
        {/if}
        {#if $saOptions.auth.enable_manual_linking}
          <SocialAuthView
            {supabaseClient}
            {providers}
            {...$socialSettings}
            isLinking
            {getText}
          />
        {/if}
      </Accordion>
    {/if}

    <!-- MFA Factors List -->
    {#if $saOptions.auth.mfa.totp.enroll_enabled}
      <Accordion title={getText('mfaFactorListHeading') + ` (${verifiedFactors.length})${verifiedFactors.length === 1 ? ' ⚠️' : ''}`}>

        {#if factors.length === 0}
          <p>{getText('mfaNoFactorsText')}</p>
        {:else}
          <ul>
            {#each factors as factor}
              {@const factorName = (factor?.friendly_name ?? factor?.factor_type) + (factor.status === 'unverified' ? ' (unverified)' : '')}
              <li class="flex" aria-label={getText('mfaTokenLabel', { name: factorName })}>
                <span>
                  {factor?.friendly_name ?? factor?.factor_type} ({getText(factor.status === 'verified' ? 'verified' : 'unverified')})
                  <br>
                  {getText('createdTime', { time: formatDate(factor.created_at, true) })}
                </span>
                <LinkButton
                  large
                  aria-label={getText('deleteMfaTokenLabel', { name: factorName })}
                  class="danger"
                  onclick={() => deleteFactor(factor)}
                >
                  &cross;
                </LinkButton>
              </li>
            {/each}
          </ul>
        {/if}

        {#if verifiedFactors.length === 1}
          <p class="warning message">{getText('mfaWarningText')}</p>
        {/if}

        <LinkButton block onclick={() => showAddMFA = true}>
          {getText('mfaAddFactorLink')}
        </LinkButton>
      </Accordion>
    {/if}

    <hr>

    <Button
      block
      size="medium"
      {loading}
      onclick={handleSignOut}
    >
      {getText('signOutButton')}
    </Button>
{/if}

</div>

<style>
  .sA-authenticated-view {
    display: flex;
    flex-direction: column;
    gap: .5em;
    padding: 1em;
  }
  hr {
    margin: 1em 0;
    color: var(--layout-color);
    border-width: 1px;
    border-style: dashed;
    opacity: 0.5;
  }
</style>
