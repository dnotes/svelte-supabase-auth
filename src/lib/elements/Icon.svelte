<script lang="ts">

  import key from "virtual:icons/lucide/key"
  import mail from "virtual:icons/lucide/mail"
  import inbox from "virtual:icons/lucide/inbox"

  import apple from "virtual:icons/simple-icons/apple"
  import azure from "virtual:icons/logos/microsoft-icon"
  import bitbucket from "virtual:icons/logos/bitbucket"
  import discord from "virtual:icons/logos/discord-icon"
  import facebook from "virtual:icons/logos/facebook"
  import figma from "virtual:icons/logos/figma"
  import fly from "virtual:icons/simple-icons/flydotio"
  import github from "virtual:icons/logos/github-icon"
  import gitlab from "virtual:icons/logos/gitlab-icon"
  import google from "virtual:icons/logos/google-icon"
  import kakao from "virtual:icons/simple-icons/kakaotalk"
  import keycloak from "virtual:icons/simple-icons/keycloak"
  import linkedin from "virtual:icons/logos/linkedin-icon"
  import notion from "virtual:icons/logos/notion-icon"
  import slack from "virtual:icons/logos/slack-icon"
  import spotify from "virtual:icons/logos/spotify-icon"
  import twitter from "virtual:icons/streamline-logos/x-twitter-logo"
  import twitch from "virtual:icons/logos/twitch"
  import workos from "virtual:icons/logos/workos-icon"
  import zoom from "virtual:icons/logos/zoom-icon"

  const map = {
    mail,
    key,
    inbox,
    apple,
    azure,
    bitbucket,
    discord,
    facebook,
    figma,
    fly,
    github,
    gitlab,
    google,
    kakao,
    keycloak,
    linkedin,
    notion,
    slack,
    spotify,
    twitter,
    twitch,
    workos,
    zoom,
  }

  interface Props {
    name: string
    size?: string
  }

  let { name, size = "10" }: Props = $props()

</script>

{#if name in map}
  {@const Component = map[name as keyof typeof map]}
  <Component width={size} height={size} />
{/if}
