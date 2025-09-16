import type { Provider } from "@supabase/supabase-js";

export const providerList:Partial<Record<Provider,string>> = {
  apple: 'Apple',
  bitbucket: 'Bitbucket',
  discord: 'Discord',
  facebook: 'Facebook',
  figma: 'Figma',
  fly: 'Fly.io',
  github: 'GitHub',
  gitlab: 'Gitlab',
  google: 'Google',
  kakao: 'KakaoTalk',
  keycloak: 'Keycloak',
  linkedin: 'LinkedIn',
  azure: 'Microsoft',
  notion: 'Notion',
  slack: 'Slack',
  spotify: 'Spotify',
  twitch: 'Twitch',
  workos: 'WorkOS',
  twitter: 'X',
  zoom: 'Zoom',
}