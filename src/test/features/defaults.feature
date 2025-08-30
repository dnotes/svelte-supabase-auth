Feature: Default config, basic operations

  Background:
    Given the default configuration
    And no providers

  @mobile
  Scenario: Visual regression for login form with no links
    Then the screenshot "defaults_login-with-link" should match
    When I click "Sign in with a password"
    Then the screenshot "defaults_login-with-password" should match

  Scenario: The main fields show
    Then I should see an "Email address" input
    And I should see a "Send link" button

  Scenario: The password field shows when requested
    When I click "Sign in with a password"
    Then I should see a "Password" input
    And I should see a "Sign up" button
    When I click "Sign in with an email link"
    Then I should NOT see a "Password" input
    And I should NOT see a "Sign up" button

  Scenario Outline: Creating an account requires email verification (<method>)
    When I sign up with <method>
    Then I should see "Click the link in the email"
    And I should see my email address
    And I should see a "Verify code" button
    And I should have an email with subject "Confirm Your Email"
    When I enter the proper code
    Then I should be signed in

    Examples:
      | method |
      | an email link |
      | a password |

  @mobile
  Scenario: Existing account
    Given I have an existing account
    Then the screenshot "defaults_login-with-password" should match

  Scenario Outline: Signing in with <method>
    Given I have an existing account
    When I sign in with <method>
    Then I should be signed in

    Examples:
      | method |
      | an email link |
      | a password |

