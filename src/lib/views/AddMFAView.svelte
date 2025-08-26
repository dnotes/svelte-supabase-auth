<script lang="ts">
  import Button from '../elements/Button.svelte'
  import Text from '../elements/Text.svelte'
  import InputWrapper from '../elements/InputWrapper.svelte'
  import LinkButton from '../elements/LinkButton.svelte'
  import type { SupabaseClient, User } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'

  interface Props {
    defaultFriendlyName?: string
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    user: User|null
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
    onComplete?: () => void
    onCancel?: () => void
  }

  let { defaultFriendlyName, InputWrapper: Wrapper, supabaseClient, user, getText, onComplete, onCancel }: Props = $props()

  let loading = $state(false)
  let error = $state('')
  let message = $state('')
  let showEnrollment = $state(false)

  // Enrollment state
  let qrCode = $state('')
  let secret = $state('')
  let verificationCode = $state('')
  let factorId = $state('')
  let challengeId = $state('')
  let friendlyName = $state(defaultFriendlyName ?? 'TOTP')

  async function startEnrollment() {
    loading = true
    error = ''

    try {
      const { data, error: enrollError } = await supabaseClient.auth.mfa.enroll({
        friendlyName,
        factorType: 'totp'
      })

      if (enrollError) throw enrollError

      factorId = data.id
      qrCode = data.totp.qr_code
      secret = data.totp.secret
      showEnrollment = true
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to start enrollment'
    } finally {
      loading = false
    }
  }

  async function verifyEnrollment() {
    if (!verificationCode.trim()) return

    loading = true
    error = ''

    try {
      // First create a challenge
      const { data: challengeData, error: challengeError } = await supabaseClient.auth.mfa.challenge({
        factorId
      })

      if (challengeError) throw challengeError
      challengeId = challengeData.id

      // Then verify the code
      const { error: verifyError } = await supabaseClient.auth.mfa.verify({
        factorId,
        challengeId,
        code: verificationCode.trim()
      })

      if (verifyError) throw verifyError

      message = 'MFA enrollment successful!'

      // Call completion callback if provided
      if (onComplete) {
        setTimeout(onComplete, 1500)
      }
    } catch (err) {
      error = err instanceof Error ? err.message : 'Invalid verification code'
    } finally {
      loading = false
    }
  }

  function cancelEnrollment() {
    showEnrollment = false
    verificationCode = ''
    error = ''
    message = ''
    if (onCancel) {
      onCancel()
    }
  }
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
      <LinkButton onclick={cancelEnrollment}>
        Cancel
      </LinkButton>
    </form>
  {:else}

    <div>
      <p>{getText('mfaScanQRCode')}</p>
      {#if qrCode}
        <img src={qrCode} alt="QR Code for TOTP setup" />
      {/if}

      <Text>{getText('mfaEnterSecret')}</Text>
      <div class="mfa-secret">{secret}</div>
    </div>

    <form onsubmit={(e) => { e.preventDefault(); verifyEnrollment(); }}>
      <Wrapper name="verification-code" label={getText('mfaEnterCodeLabel')} icon="key">
        <input
          type="text"
          name="verification-code"
          bind:value={verificationCode}
          placeholder="000000"
          maxlength="6"
          pattern="[0-9]{6}"
          autocomplete="one-time-code"
          disabled={loading}
        >
      </Wrapper>

      <Button primary size="large" {loading} onclick={verifyEnrollment}>
        {getText('mfaVerifyCodeButton')}
      </Button>

      <LinkButton onclick={cancelEnrollment}>
        Cancel
      </LinkButton>
    </form>
  {/if}

  {#if message}
    <Text>{message}</Text>
  {/if}

  {#if error}
    <Text type="danger">{error}</Text>
  {/if}
</div>

<style>
  .mfa-secret {
    font-family: monospace;
    text-align: center;
    margin: .5em 0;
    line-height: 1;
    padding: .5em;
  }
  img {
    display: block;
    margin: .5em auto;
  }
</style>