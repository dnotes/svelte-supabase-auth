<template>
  <div>
    <supabase-auth
      ref="authElement"
      :supabase-url="supabaseUrl"
      :supabase-anon-key="supabaseAnonKey"
      :providers="JSON.stringify(providers)"
      :social-layout="socialLayout"
      :social-button-size="socialButtonSize"
      :initial-view="initialView"
      :locale="locale"
      :auth-options="JSON.stringify(authOptions)"
      :texts="JSON.stringify(texts)"
    />

    <div v-if="user" class="user-info">
      <h4>Welcome, {{ user.email }}!</h4>
      <p>User ID: {{ user.id }}</p>
    </div>
  </div>
</template>

<script>
// Import the web component
import 'svelte-supabase-auth/web-component';

export default {
  name: 'SupabaseAuthComponent',
  props: {
    supabaseUrl: {
      type: String,
      required: true
    },
    supabaseAnonKey: {
      type: String,
      required: true
    },
    providers: {
      type: Array,
      default: () => []
    },
    socialLayout: {
      type: String,
      default: 'vertical',
      validator: (value) => ['vertical', 'horizontal'].includes(value)
    },
    socialButtonSize: {
      type: String,
      default: 'medium',
      validator: (value) => ['tiny', 'small', 'medium', 'large'].includes(value)
    },
    initialView: {
      type: String,
      default: 'sign_in_with_password'
    },
    locale: {
      type: String,
      default: 'en'
    },
    authOptions: {
      type: Object,
      default: () => ({})
    },
    texts: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.setupAuthListener();
  },
  methods: {
    setupAuthListener() {
      const authElement = this.$refs.authElement;

      if (authElement) {
        // Listen for auth state changes
        const handleAuthStateChange = (event) => {
          const newUser = event.detail?.user || authElement.user;
          this.user = newUser;
          this.$emit('auth-state-change', newUser);
        };

        authElement.addEventListener('auth-state-change', handleAuthStateChange);

        // Initial user state
        this.user = authElement.user;

        // Store the cleanup function
        this.authCleanup = () => {
          authElement.removeEventListener('auth-state-change', handleAuthStateChange);
        };
      }
    }
  },
  beforeUnmount() {
    if (this.authCleanup) {
      this.authCleanup();
    }
  }
};
</script>

<style scoped>
.user-info {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #e8f5e8;
  border-radius: 8px;
  border: 1px solid #4caf50;
}
</style>

