<script lang="ts">
  import type { Snippet } from 'svelte';
  import Button from '../elements/Button.svelte'
  import Text from '../elements/Text.svelte'
  import MFAChallengeView from './MFAChallengeView.svelte'
  import InputWrapper from '../elements/InputWrapper.svelte'
  import type { SupabaseClient, User } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import type { SupabaseAuthOptions } from '../options'
  import type { AuthViews } from '$lib/Auth.svelte';

  interface Props {
    supabaseClient: SupabaseClient
    user: User|null
    locale?: string
    loggedInAs?: Snippet<[User|null]>|undefined
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
    authOptions: SupabaseAuthOptions
    setView: (view: AuthViews) => void
  }

  let { supabaseClient, user, loggedInAs, getText, locale, authOptions, setView }: Props = $props()

  let loading = $state(false)
  let error = $state('')
  let mfaRequired = $state(false)
  let needsMFAChallenge = $state(false)

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

      const verifiedFactors = [...(factorsData.totp || []), ...(factorsData.phone || [])].filter(
        factor => factor.status === 'verified'
      )

      const hasVerifiedFactors = verifiedFactors.length > 0
      const isAAL1 = aalData.currentLevel === 'aal1'
      const canUpgradeToAAL2 = aalData.nextLevel === 'aal2'

      // User needs MFA challenge if they have factors and are at AAL1 but can upgrade to AAL2
      needsMFAChallenge = hasVerifiedFactors && isAAL1 && canUpgradeToAAL2

      // User needs to enroll MFA if they're new, have no factors, and MFA is required
      const isNewUser = !hasVerifiedFactors
      mfaRequired = isNewUser && authOptions.auth.mfa.required
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
</script>

{#if needsMFAChallenge}
  <!-- User has MFA factors and needs to complete MFA challenge -->
  <MFAChallengeView InputWrapper={InputWrapper} {supabaseClient} {getText} />
{:else if mfaRequired}
  <!-- User is new and MFA is required - redirect to enrollment -->
  <div>
    <h2>{getText('mfaEnrollment')}</h2>
    <p>Multi-factor authentication is required for your account. Please set up MFA to continue.</p>

    <Button
      block
      primary
      size="large"
      onclick={() => setView('mfa_management')}
    >
      {getText('enrollMFA')}
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

    <div class="actions">
      {#if authOptions.auth.mfa.totp.enroll_enabled}
        <Button
          block
          size="medium"
          onclick={() => setView('mfa_management')}
        >
          {getText('mfaEnrollment')}
        </Button>
      {/if}

      <Button
        block
        size="medium"
        {loading}
        onclick={handleSignOut}
      >
        {getText('signOutButton')}
      </Button>
    </div>

    {#if error}
      <Text type="danger">{error}</Text>
    {/if}
  </div>
{/if}

<style>
  .supabase-auth-authenticated-view {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }


</style>
