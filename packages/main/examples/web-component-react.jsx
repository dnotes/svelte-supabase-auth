/**
 * React Example: Using Supabase Auth Web Component
 *
 * This example shows how to use the Supabase Auth web component in a React application.
 */

import React, { useEffect, useRef, useState } from 'react';

// Import the web component
import 'svelte-supabase-auth/web-component';

const SupabaseAuthComponent = ({
  supabaseUrl,
  supabaseAnonKey,
  providers = [],
  socialLayout = 'vertical',
  socialButtonSize = 'medium',
  initialView = 'sign_in_with_password',
  locale = 'en',
  authOptions = {},
  texts = {},
  onAuthStateChange
}) => {
  const authRef = useRef(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authElement = authRef.current;

    if (authElement) {
      // Set up event listener for auth state changes
      const handleAuthStateChange = (event) => {
        const newUser = event.detail?.user || authElement.user;
        setUser(newUser);
        if (onAuthStateChange) {
          onAuthStateChange(newUser);
        }
      };

      authElement.addEventListener('auth-state-change', handleAuthStateChange);

      // Initial user state
      setUser(authElement.user);

      return () => {
        authElement.removeEventListener('auth-state-change', handleAuthStateChange);
      };
    }
  }, [onAuthStateChange]);

  return (
    <div>
      <supabase-auth
        ref={authRef}
        supabase-url={supabaseUrl}
        supabase-anon-key={supabaseAnonKey}
        providers={JSON.stringify(providers)}
        social-layout={socialLayout}
        social-button-size={socialButtonSize}
        initial-view={initialView}
        locale={locale}
        auth-options={JSON.stringify(authOptions)}
        texts={JSON.stringify(texts)}
      />

      {user && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#e8f5e8',
          borderRadius: '8px'
        }}>
          <h4>Welcome, {user.email}!</h4>
          <p>User ID: {user.id}</p>
        </div>
      )}
    </div>
  );
};

// Example usage in a React app
const App = () => {
  const handleAuthStateChange = (user) => {
    console.log('Auth state changed:', user);
    // Handle authentication state changes here
    if (user) {
      // User is signed in
      console.log('User signed in:', user.email);
    } else {
      // User is signed out
      console.log('User signed out');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h1>My App</h1>

      <SupabaseAuthComponent
        supabaseUrl="https://your-project.supabase.co"
        supabaseAnonKey="your-anon-key"
        providers={['google', 'github', 'discord']}
        socialLayout="horizontal"
        socialButtonSize="large"
        initialView="sign_in_with_password"
        locale="en"
        authOptions={{
          auth: {
            email: true,
            phone: false
          }
        }}
        texts={{
          signIn: 'Sign In',
          signUp: 'Sign Up',
          socialDivider: 'or continue with'
        }}
        onAuthStateChange={handleAuthStateChange}
      />
    </div>
  );
};

export default App;

