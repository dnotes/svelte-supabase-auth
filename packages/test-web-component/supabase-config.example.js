// Example Supabase configuration for testing
// Copy this file to supabase-config.js and fill in your actual values

export const supabaseConfig = {
  // Your Supabase project URL
  url: 'https://your-project-id.supabase.co',

  // Your Supabase anon key (public key)
  anonKey: 'your-anon-key-here',

  // Optional: Custom auth options for testing
  authOptions: {
    auth: {
      enable_signup: true,
      enable_anonymous_sign_ins: false,
      enable_manual_linking: false,
      email: {
        enable_signup: true,
        enable_confirmations: false,
        double_confirm_changes: true,
        secure_password_change: false,
        max_frequency: "1m",
        otp_length: 6,
        otp_expiry: 3600,
      },
      mfa: {
        required: false,
        totp: {
          enroll_enabled: true,
          verify_enabled: true,
        },
      },
    },
    passwordPolicy: {
      minLength: 8,
      requiredCharacters: "",
      ignoreLengthRecommendations: false,
    },
    deleteAccountFunction: null,
  },

  // Social providers to test
  providers: ['google', 'github', 'discord'],

  // Custom texts for testing
  customTexts: {
    signIn: 'Sign In (Custom)',
    signUp: 'Sign Up (Custom)',
    emailLabel: 'Email Address (Custom)',
    pwLabel: 'Password (Custom)',
  }
};

// Usage example:
// import { supabaseConfig } from './supabase-config.js';
//
// const authElement = document.querySelector('supabase-auth');
// authElement.setAttribute('supabase-url', supabaseConfig.url);
// authElement.setAttribute('supabase-anon-key', supabaseConfig.anonKey);
// authElement.setAttribute('providers', JSON.stringify(supabaseConfig.providers));
// authElement.setAttribute('auth-options', JSON.stringify(supabaseConfig.authOptions));
// authElement.setAttribute('texts', JSON.stringify(supabaseConfig.customTexts));
