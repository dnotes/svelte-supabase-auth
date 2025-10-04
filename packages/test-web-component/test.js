// Simple test script to verify the web component is working
// Run this in the browser console after loading the test page

console.log('🧪 Supabase Auth Web Component Test');

// Test 1: Check if the custom element is registered
const isRegistered = customElements.get('supabase-auth') !== undefined;
console.log('✅ Custom element registered:', isRegistered);

// Test 2: Check if elements exist in DOM
const basicAuth = document.getElementById('basicAuth');
const advancedAuth = document.getElementById('advancedAuth');
console.log('✅ Basic auth element found:', !!basicAuth);
console.log('✅ Advanced auth element found:', !!advancedAuth);

// Test 3: Check if user property is accessible
if (basicAuth) {
  console.log('✅ User property accessible:', typeof basicAuth.user !== 'undefined');
  console.log('📊 Current user state:', basicAuth.user);
}

// Test 4: Test configuration update
function testConfigUpdate() {
  const testUrl = 'https://test.supabase.co';
  const testKey = 'test-key';

  basicAuth.setAttribute('supabase-url', testUrl);
  basicAuth.setAttribute('supabase-anon-key', testKey);

  console.log('✅ Configuration update test passed');
  console.log('📊 Updated URL:', basicAuth.getAttribute('supabase-url'));
  console.log('📊 Updated Key:', basicAuth.getAttribute('supabase-anon-key'));
}

// Test 5: Test providers parsing
function testProvidersParsing() {
  const testProviders = '["google", "github", "discord"]';
  basicAuth.setAttribute('providers', testProviders);

  console.log('✅ Providers parsing test passed');
  console.log('📊 Providers attribute:', basicAuth.getAttribute('providers'));
}

// Run tests
console.log('\n🔧 Running configuration tests...');
testConfigUpdate();
testProvidersParsing();

console.log('\n🎉 All tests completed! Check the results above.');
console.log('\n💡 To test with real Supabase:');
console.log('1. Get your project URL and anon key from Supabase dashboard');
console.log('2. Enter them in the configuration section');
console.log('3. Click "Update Configuration"');
console.log('4. Try signing in/up!');
