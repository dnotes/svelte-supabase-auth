<script lang="ts">
  import Button from '../elements/Button.svelte'
  import InputWrapper from '../elements/InputWrapper.svelte'
  import LinkButton from '../elements/LinkButton.svelte'
  import MFASingleChallenge from './MFASingleChallenge.svelte'
  import type { SupabaseClient, User } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import { onDestroy } from 'svelte'
  import { messages } from '../messages.svelte'
  import { needsMFAChallenge } from '../stores.svelte'
  import { isElevationError } from '$lib/utils/aal2';

  interface Props {
    processing?: boolean
    defaultFriendlyName?: string
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
    onComplete?: () => void
    onCancel?: () => void
  }

  let {
    processing = $bindable(false),
    defaultFriendlyName,
    InputWrapper: Wrapper,
    supabaseClient,
    getText
  }: Props = $props()

  let loading = $state(false)
  let showEnrollment = $state(false)

  // Enrollment state
  let qrCode = $state('')
  let secret = $state('')
  let factorId = $state('')
  let friendlyName = $state(defaultFriendlyName ?? 'TOTP')
  let showSecret = $state(false)

  // Input validation functions
  function validateFriendlyName(name: string): boolean {
    // Allow any Unicode characters, limit length for security and UX
    return name.trim().length > 0 && name.trim().length <= 50
  }

  function sanitizeSecret(secret: string): string {
    // Ensure secret contains only base32 characters for display
    return secret.replace(/[^A-Z2-7]/g, '')
  }

  async function startEnrollment() {
    if (!validateFriendlyName(friendlyName)) {
      messages.add('error', 'Please enter a valid name (1-50 characters)')
      return
    }

    loading = true
    messages.clear()

    try {
      const { data, error: enrollError } = await supabaseClient.auth.mfa.enroll({
        friendlyName: friendlyName.trim(),
        factorType: 'totp'
      })

      if (enrollError) {
        // Check for AAL2 requirement on enroll
        if (isElevationError(enrollError)) {
          $needsMFAChallenge = 'toElevate'
          return
        }
        throw enrollError
      }

      factorId = data.id
      qrCode = data.totp.qr_code
      secret = data.totp.secret
      showEnrollment = true
    } catch (err) {
      if (isElevationError(err)) {
        $needsMFAChallenge = 'toElevate'
        return
      }
      messages.add('error', err instanceof Error ? err.message : 'Failed to start enrollment')
    } finally {
      loading = false
    }
  }

  function oncancel() {
    processing = false
    messages.clear()
    // Clear sensitive data
    secret = ''
    qrCode = ''
    factorId = ''
  }

  // Cleanup on component destruction
  onDestroy(() => {
    // Clear all sensitive state
    secret = ''
    qrCode = ''
    factorId = ''
    messages.clear()
  })
</script>

<div>
  {#if !showEnrollment}

    <form onsubmit={(e) => {
      e.preventDefault()
      startEnrollment()
    }}>
      <p>{getText('mfaAddFactorParagraph')}</p>
      <Wrapper name="friendly-name" label={getText('mfaFriendlyNameLabel')} icon="user">
        <input type="text" name="friendly-name" bind:value={friendlyName} />
      </Wrapper>
      <Button
        submit
        block
        primary
        size="large"
        {loading}
      >
        {getText('mfaAddFactorButton')}
      </Button>
    </form>

    <LinkButton onclick={oncancel}>
      Cancel
    </LinkButton>

  {:else}

    <div>
      <p>{getText('mfaScanQRCode')}</p>
      {#if qrCode}
        <img src={qrCode} alt="QR Code for TOTP setup" />
      {/if}

      <p>{getText('mfaEnterSecret')}</p>
      <div class="mfa-secret-container">
        {#if showSecret}
          <div class="mfa-secret" role="textbox" aria-label="TOTP Secret">{sanitizeSecret(secret)}</div>
          <LinkButton onclick={() => showSecret = false}>Hide</LinkButton>
        {:else}
          <div class="mfa-secret-hidden">••••••••••••••••••••••••••••••••</div>
          <LinkButton onclick={() => showSecret = true}>Show Secret</LinkButton>
        {/if}
      </div>
    </div>

    <MFASingleChallenge
      bind:processing
      cancellable
      InputWrapper={Wrapper}
      {supabaseClient}
      factor={{id: factorId, status: 'unverified', factor_type: 'totp', friendly_name: friendlyName, created_at: new Date().toISOString(), updated_at: new Date().toISOString()}}
      {getText}
      {factorId}
    />

  {/if}
</div>

<style>
  .mfa-secret-container {
    margin: .5em 0;
    text-align: center;
  }
  .mfa-secret, .mfa-secret-hidden {
    font-family: monospace;
    text-align: center;
    margin: .5em 0;
    line-height: 1;
    padding: .5em;
    border-radius: 4px;
    word-break: break-all;
  }
  .mfa-secret-hidden {
    color: var(--layout-color);
  }
  img {
    display: block;
    margin: .5em auto;
  }
</style>