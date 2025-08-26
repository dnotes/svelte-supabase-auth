/**
 * Auth-related options from `supabase/config.toml` that affect sign-up/login/update/delete flows,
 * plus password policy controls (self-hosted via GoTrue env vars).
 *
 * Defaults shown are the CLI/local (self-hosted) defaults unless noted.
 * See Supabase config docs for exact behavior and limits.
 */
export interface SupabaseAuthOptions {
  auth: {
    /** Allow/disallow new user signups across all providers. Disabling blocks all new accounts. @default true */
    enable_signup: boolean;
    /** Allow anonymous sign-ins (no email/phone). Useful for trials/guests; combine with rate limits & CAPTCHA to curb abuse. @default false */
    enable_anonymous_sign_ins: boolean;
    /** Allow manual linking of accounts with multiple providers (e.g., email+social). @default false */
    enable_manual_linking: boolean;
    /**
     * Email auth controls. If you have disabled email auth in your Supabase dashboard,
     * set this to `null` or `false` to disable the email signup form.
     */
    email: {
      /** Allow signups via email/password. Turning off forces other providers or invites only. @default true */
      enable_signup: boolean;
      /** Require email verification before sign-in. (Hosted projects default to true; local default is false.) @default false */
      enable_confirmations: boolean;
      /** When a user changes email, require confirmation on BOTH old and new addresses (more secure). If false, only new email must confirm. @default true */
      double_confirm_changes: boolean;
      /** If true, user must provide current password when setting a new one (extra protection for logged-in sessions). @default false */
      secure_password_change: boolean;
      /** Minimum delay between outbound auth emails (e.g., confirmation, magic link, recovery). Use durations like "1m", "1h", "24h". @default "1m" */
      max_frequency: string;
      /** Length of email OTP (digits). Must be 6–10. Longer = harder to guess, but adds friction. @default 6 */
      otp_length: number;
      /** OTP lifetime in seconds (default 1 hour). Shorten for higher security. @default 3600 */
      otp_expiry: number;
    } | null | false;
    /** MFA (Multi-Factor Authentication) configuration */
    mfa: {
      /**
       * Require new users to enroll MFA after account creation. When true, users must set up MFA before accessing the app.
       * This is ONLY a setting for this UI library, not for Supabase.
       * @default false
       */
      required: boolean;
      /** TOTP (Time-based One-Time Password) configuration */
      totp: {
        /** Allow users to enroll a TOTP factor (e.g., Authenticator app). @default true */
        enroll_enabled: boolean;
        /** Allow verifying a TOTP factor during sign-in / step-up auth. @default true */
        verify_enabled: boolean;
      };
    };
  };
  /**
   * Password policy controls (self-hosted GoTrue via env). In hosted Supabase,
   * set these in the Dashboard at project/[project-name]/auth/providers
   */
  passwordPolicy: {
    /**
     * Minimum password length. Set higher (e.g., 10–12) for stronger security. (Env: GOTRUE_PASSWORD_MIN_LENGTH)
     * NOTE: You MUST change this to 8 or higher to meet minimum security recommendations, as Supabase's default is 6.
     * Change it in your dashboard at project/[project-name]/auth/providers, under the settings for "Email".
     * @default 6
     */
    minLength: number;
    /**
     * Colon-separated character sets; password must contain ≥1 from each set.
     * THIS SETTING IS NOT RECOMMENDED, as it REDUCES password strength for actual users.
     * (See e.g. NIST 800-63, 3.1.1.2) and leave it empty (the default) to avoid causing issues.
     * The password strength indicator in the UI is NOT against NIST recommendations.
     * @default ""
     */
    requiredCharacters: string;
  };
}

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

export type PartialSupabaseAuthOptions = DeepPartial<SupabaseAuthOptions>

export const SUPABASE_AUTH_DEFAULTS: SupabaseAuthOptions = {
  auth: {
    // --- Sign-up controls ---
    enable_signup: true,
    enable_anonymous_sign_ins: false,
    enable_manual_linking: false,

    email: {
      // --- Sign-up controls (email) ---
      enable_signup: true,
      enable_confirmations: false, // require verified email before sign-in

      // --- Email & password updates ---
      double_confirm_changes: true, // confirm email change on old+new addresses
      secure_password_change: false, // require current password to change password
      max_frequency: "1m", // throttle outbound auth emails
      otp_length: 6,
      otp_expiry: 3600, // seconds
    },

    // (Optional) Sign-up controls (SMS)
    // sms: {
    //   enable_signup: true,
    //   enable_confirmations: false,
    // },

    // --- MFA (TOTP) ---
    mfa: {
      required: false,
      totp: {
        enroll_enabled: true,
        verify_enabled: true,
      },
    },

  },

  passwordPolicy: {
    minLength: 6,
    requiredCharacters: "", // empty => no specific sets required
  },
}