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

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    user: User|null
    locale?: string
    loggedInAs?: Snippet<[User|null]>|undefined
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
    authOptions: SupabaseAuthOptions
    setView: (view: AuthViews) => void
  }

  let { InputWrapper: Wrapper, supabaseClient, user, loggedInAs, getText, locale, authOptions, setView }: Props = $props()

  let loading = $state(false)
  let error = $state('')
  let mfaRequired = $state(false)
  let needsMFAChallenge = $state(false)
  let factors = $state<Factor[]>([])
  let verifiedFactors = $derived(factors.filter(factor => factor.status === 'verified'))
  let showAddMFA = $state(false)

  const time = $derived(user?.last_sign_in_at ? new Date(user?.last_sign_in_at).toLocaleString(locale) : '')

  // Check MFA status when component mounts
  $effect(() => {
    checkMFAStatus()
  })

  async function checkMFAStatus() {
    if (!user || user.is_anonymous) {
      mfaRequired = false
      needsMFAChallenge = false
      return
    }

    try {
      // Check current AAL
      const { data: aalData } = await supabaseClient.auth.mfa.getAuthenticatorAssuranceLevel()

      // Check if user has any enrolled factors
      const { data: factorsData } = await supabaseClient.auth.mfa.listFactors()

      if (!aalData || !factorsData) {
        mfaRequired = false
        needsMFAChallenge = false
        return
      }

      factors = factorsData.all

      const hasVerifiedFactors = verifiedFactors.length > 0
      const isAAL1 = aalData.currentLevel === 'aal1'
      const canUpgradeToAAL2 = aalData.nextLevel === 'aal2'

      // User needs MFA challenge if they have factors and are at AAL1 but can upgrade to AAL2
      needsMFAChallenge = hasVerifiedFactors && isAAL1 && canUpgradeToAAL2

      // User needs to enroll MFA if they're new, have no verified factors, and MFA is required
      const isNewUser = !hasVerifiedFactors
      mfaRequired = isNewUser && authOptions?.auth?.mfa?.required || false
    } catch (error) {
      console.error('Error checking MFA status:', error)
      mfaRequired = false
      needsMFAChallenge = false
    }
  }

  async function handleSignOut() {
    loading = true
    error = ''

    const { error: signOutError } = await supabaseClient.auth.signOut()
    if (signOutError) {
      error = signOutError.message
    }

    loading = false
  }

  async function deleteFactor(factor: any) {
    const canDelete = !authOptions?.auth?.mfa?.required || verifiedFactors.length > 1 || factor.status === 'unverified'

    if (!canDelete) {
      error = getText('mfaNoDeleteError')
      return
    }

    if (!confirm(getText('mfaDeleteFactorConfirmation', { name: factor.friendly_name ?? factor.factor_type.toUpperCase() }))) return

    loading = true
    error = ''

    try {
      const { error: unenrollError } = await supabaseClient.auth.mfa.unenroll({
        factorId: factor.id
      })

      if (unenrollError) throw unenrollError

      // Refresh MFA status
      await checkMFAStatus()
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to remove factor'
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

{#if needsMFAChallenge}
  <!-- User has MFA factors and needs to complete MFA challenge -->
  <MFAChallengeView InputWrapper={Wrapper} {supabaseClient} {getText} />
{:else if showAddMFA}
  <!-- Add MFA Factor View -->
  <AddMFAView
    defaultFriendlyName={verifiedFactors.length === 1 ? `${getText('backupText', { count: verifiedFactors.length })}` : 'TOTP'}
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
  <div class="supabase-auth-authenticated-view">
    <div class="supabase-auth-user-info">
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

    <!-- MFA Factors List -->
    {#if authOptions.auth.mfa.totp.enroll_enabled}
      <div>
        <h3>{getText('mfaFactorListHeading')}</h3>

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
          <p class="danger">{getText('mfaWarningText')}</p>
        {/if}

        <LinkButton block onclick={() => showAddMFA = true}>
          {getText('mfaAddFactorLink')}
        </LinkButton>
      </div>
    {/if}

    <Button
      block
      size="medium"
      {loading}
      onclick={handleSignOut}
    >
      {getText('signOutButton')}
    </Button>

    {#if error}
      <Text type="danger">{error}</Text>
    {/if}
  </div>
{/if}

<style>
  .supabase-auth-authenticated-view {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    padding: 1em;
  }
  ul {
    padding: .5em 0;
  }
  li {
    padding: .5em;
    margin: .5em 0;
  }
  li>span {
    flex: 1;
  }
  p.danger {
    font-size: 70%;
    line-height: 1.1em;
    margin: .5em;
  }
</style>
