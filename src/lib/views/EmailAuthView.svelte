<script lang="ts">
  import LinkButton from '../elements/LinkButton.svelte'
  import Button from '../elements/Button.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import InputWrapper from '$lib/elements/InputWrapper.svelte';
  import { messages } from '$lib/messages.svelte';
  import { emailLinkSent, saOptions, signInView, email } from '$lib/stores.svelte';
  import { autofocus } from '$lib/utils/autofocus.svelte';
  import { tick } from 'svelte';
  import PasswordField from '$lib/components/PasswordField.svelte';
  import { isNull } from 'lodash-es';

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { InputWrapper:Wrapper, supabaseClient, getText }: Props = $props()

  let loading = $state(false)
  let password = $state('')

  let emailEl:HTMLInputElement|undefined = $state()
  let passwordEl:HTMLInputElement|undefined = $state()
  async function focus(el:'email'|'password') {
    await tick()
    if (el === 'email' || !$email) emailEl?.focus()
    else passwordEl?.focus()
  }

  let issues:Promise<string[]> = $state(new Promise(()=>{}))
  let feedback = $state(false)

  // Computed properties for auth options
  const canSignUp = $derived($saOptions.auth.enable_signup && $saOptions.auth.email && $saOptions.auth.email.enable_signup)
  const usePassword = $derived($signInView === 'sign_in_with_password')

  async function submitMagicLink() {
    if (!$saOptions.auth.email) return
    messages.clear()
    loading = true

    const { error: err } = await supabaseClient.auth.signInWithOtp({ email: $email })

    if (err) messages.add('error', err.message)
    else $emailLinkSent = {
      email: $email,
      sentAt: new Date(),
      expiresAt: new Date(Date.now() + $saOptions.auth.email.otp_expiry * 1000)
    }

    loading = false
  }

  async function submitPassword(isSignUp: boolean = false) {
    if (!$saOptions.auth.email) return
    messages.clear()
    loading = true

    if (isSignUp) {

      let arr = await issues
      if (arr.length) {
        if (!confirm(getText('pwSignupConfirm') + '\n\n- ' + arr.join('\n- '))) {
          loading = false
          feedback = true
          return
        }
      }

      if (password.length < $saOptions.passwordPolicy.minLength) {
        messages.add('error', getText('pwLength', { min: $saOptions.passwordPolicy.minLength }))
        feedback = true
        loading = false
        return
      }

      const { error: err } = await supabaseClient.auth.signUp({
        email: $email, password
      })

      if (err) messages.add('error', err.message)
      else $emailLinkSent = {
        email: $email,
        sentAt: new Date(),
        expiresAt: new Date(Date.now() + $saOptions.auth.email.otp_expiry * 1000)
      }
    } else {
      const { error: err } = await supabaseClient.auth.signInWithPassword({
        email: $email, password
      })

      if (err) messages.add('error', err.message)
    }

    loading = false
  }
</script>

{#snippet emailLinks()}
  {#if !usePassword}
    <LinkButton onclick={() => { $signInView = 'sign_in_with_password'; focus('password') }}>
      {getText('switchToPassword')}
    </LinkButton>
  {:else}
    <LinkButton onclick={() => { $signInView = 'sign_in'; focus('email') }}>
      {getText('switchToMagicLink')}
    </LinkButton>
  {/if}
{/snippet}

{#snippet resetPasswordLink()}
  <LinkButton onclick={() => $signInView = 'forgotten_password'}>
    {getText('resetPassword')}
  </LinkButton>
{/snippet}

<form onsubmit={(e) => {
  e.preventDefault()
  if (usePassword) {
    submitPassword(false)
  } else {
    submitMagicLink()
  }
}}>
  <Wrapper name="email" label={getText('emailLabel')} icon="mail" links={emailLinks}>
    <input type="email" name="email" bind:value={$email} use:autofocus bind:this={emailEl}>
  </Wrapper>

  {#if usePassword}
    <Wrapper name="password" label={getText('pwLabel')} icon="key" links={resetPasswordLink}>
      <PasswordField {feedback} bind:issues bind:value={password} {getText} />
    </Wrapper>
  {/if}

  {#if !usePassword}
    <!-- Magic Link Flow -->
    <Button submit block primary size="large" {loading} icon="inbox" onclick={submitMagicLink}>
      {getText('sendLink')}
    </Button>
  {:else}
    <!-- Password Flow -->
    <Button submit block primary size="large" {loading} icon="inbox" onclick={() => submitPassword(false)}>
      {getText('signIn')}
    </Button>

    {#if canSignUp}
      <Button block size="large" {loading} icon="inbox" onclick={() => submitPassword(true)}>
        {getText('signUp')}
      </Button>
    {/if}
  {/if}

</form>

