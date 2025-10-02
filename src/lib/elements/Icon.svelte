<script lang="ts">
  import { iconData } from './iconData.js';

  const iconMap = {
    mail: 'mail',
    key: 'key',
    inbox: 'inbox',
    apple: 'apple',
    azure: 'microsoft-icon',
    bitbucket: 'bitbucket',
    discord: 'discord-icon',
    facebook: 'facebook',
    figma: 'figma',
    fly: 'flydotio',
    github: 'github-icon',
    gitlab: 'gitlab-icon',
    google: 'google-icon',
    kakao: 'kakaotalk',
    keycloak: 'keycloak',
    linkedin: 'linkedin-icon',
    notion: 'notion-icon',
    slack: 'slack-icon',
    spotify: 'spotify-icon',
    twitter: 'x-twitter-logo',
    twitch: 'twitch',
    workos: 'workos-icon',
    zoom: 'zoom-icon',
  }

  interface Props {
    name: string
    size?: string
  }

  let { name, size = "10" }: Props = $props()

</script>

{#if name in iconMap}
  {@const iconKey = iconMap[name as keyof typeof iconMap]}
  {@const icon = iconData[iconKey]}
  {#if icon}
    <svg 
      width={size} 
      height={size} 
      viewBox={icon.viewBox || '0 0 24 24'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {@html icon.body}
    </svg>
  {/if}
{/if}
