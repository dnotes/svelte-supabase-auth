<script lang="ts">
  import type { Snippet } from 'svelte';
  import Button from '../elements/Button.svelte'
  import Text from '../elements/Text.svelte'
  import MFAChallengeView from './MFAChallengeView.svelte'
  import AddMFAView from './AddMFAView.svelte'
  import LinkButton from '../elements/LinkButton.svelte'
  import InputWrapper from '../elements/InputWrapper.svelte'
  import type { Factor, SupabaseClient, User } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import type { SupabaseAuthOptions } from '../options'
  import type { AuthViews } from '$lib/Auth.svelte';
  import { messages } from '$lib/messages.svelte';
  import Accordion from '$lib/components/Accordion.svelte';

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    user: User|null
    locale?: string
    loggedInAs?: Snippet<[User|null]>|undefined
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
    authOptions: SupabaseAuthOptions
    setView: (view: AuthViews) => void
    userInfo?: Snippet<[User|null]>
  }

  let { InputWrapper: Wrapper, supabaseClient, user, loggedInAs, getText, locale, authOptions, setView, userInfo }: Props = $props()

  let loading = $state(false)
  let mfaRequired = $state(false)
  let needsMFAChallenge = $state(false)
  let factors = $state<Factor[]>([])
  let verifiedFactors = $derived(factors.filter(factor => factor.status === 'verified'))
  let showAddMFA = $state(false)
  let showNetworkError = $state(false)

  const time = $derived(user?.last_sign_in_at ? new Date(user?.last_sign_in_at).toLocaleString(locale) : '')

  // Check MFA status when component mounts
  $effect(() => {
    checkMFAStatus()
  })

  async function checkMFAStatus() {
    if (!user || user.is_anonymous) {
      mfaRequired = false
      needsMFAChallenge = false
      showNetworkError = false
      return
    }

    try {
      // Check if user has any enrolled factors
      const { data: factorsData, error: factorsError } = await supabaseClient.auth.mfa.listFactors()

      if (factorsError) {
        throw new Error(`Failed to load MFA factors: ${factorsError.message}`)
      }

      factors = factorsData?.all ?? []

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
      needsMFAChallenge = hasVerifiedFactors && isAAL1 && canUpgradeToAAL2

      // User needs to enroll MFA if they're new, have no verified factors, and MFA is required
      const isNewUser = !hasVerifiedFactors
      mfaRequired = isNewUser && authOptions.auth.mfa.required || false

      // Clear any previous network errors
      showNetworkError = false

    } catch (error) {
      console.warn('MFA status check failed:', error)

      // If we have verified factors but can't check AAL, show MFA challenge
      // This allows users to still authenticate even if AAL check fails
      if (verifiedFactors.length > 0) {
        needsMFAChallenge = true
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

    loading = false
  }

  async function deleteFactor(factor: any) {
    const canDelete = !authOptions?.auth?.mfa?.required || verifiedFactors.length > 1 || factor.status === 'unverified'

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

      if (unenrollError) throw unenrollError

      // Refresh MFA status
      await checkMFAStatus()
    } catch (err) {
      messages.add('error', err instanceof Error ? err.message : 'Failed to remove factor')
    } finally {
      loading = false
    }
  }

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
</script>

<div class="sA-authenticated-view">

{#if showNetworkError}
  <!-- Network/Server Error Screen -->
  <p class="danger">{getText('networkError')}</p>

  <Button block size="medium" {loading} onclick={handleSignOut}>
    Sign Out
  </Button>
{:else if needsMFAChallenge}
  <!-- User has MFA factors and needs to complete MFA challenge -->
  <MFAChallengeView InputWrapper={Wrapper} {supabaseClient} {getText} />
{:else if showAddMFA}
  <!-- Add MFA Factor View -->
  <AddMFAView
    defaultFriendlyName={verifiedFactors.length ? `${getText('backupText', { count: factors.length })}` : 'TOTP'}
    InputWrapper={Wrapper}
    {supabaseClient}
    {user}
    {getText}
    onComplete={() => {
      showAddMFA = false;
      checkMFAStatus();
    }}
    onCancel={() => {
      showAddMFA = false;
    }}
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
      {#if loggedInAs}
        {@render loggedInAs(user)}
      {:else}
        <p dir="auto">
          {getText('loggedIn')}
          {#if user?.last_sign_in_at}
            <br/>{getText('loggedInTime', { time })}
          {/if}
          {#if user?.email}
            <br/>{getText('loggedInEmail', { email: user?.email ?? ''})}
          {/if}
        </p>
      {/if}
    </div>

    {#if userInfo}
      {@render userInfo(user)}
    {/if}

    <!-- MFA Factors List -->
    {#if authOptions.auth.mfa.totp.enroll_enabled}
      <Accordion title={getText('mfaFactorListHeading') + ` (${verifiedFactors.length})${verifiedFactors.length === 1 ? ' ⚠️' : ''}`}>

        {#if factors.length === 0}
          <p>{getText('mfaNoFactorsText')}</p>
        {:else}
          <ul>
            {#each factors as factor}
              <li class="flex">
                <span>
                  {getText('mfaListItemText', {
                    name: factor?.friendly_name ?? factor?.factor_type,
                    date: formatDate(factor.created_at),
                    status: getText(`${factor.status}Text`)
                  })}
                </span>
                <LinkButton class="danger" onclick={() => deleteFactor(factor)}>
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
    gap: 1.5em;
    padding: 1em;
  }
</style>
