@defaults
Feature: Default config, basic operations

  Background:
    Given the default configuration
    And no providers

  @mobile
  Scenario: Visual regression for login form with no providers
    Then the screenshot "defaults_login-with-passphrase" should match
    When I click "Sign in with an email link"
    Then the screenshot "defaults_login-with-link" should match

  Scenario: The main fields show
    Then I should see an "Email address" input
    And I should see a "Passphrase" input

  Scenario: The passphrase field shows when requested
    When I click "Sign in with an email link"
    Then I should NOT see a "Passphrase" input
    When I click "Sign in with a passphrase"
    Then I should see a "Passphrase" input

  Scenario: The signup button shows only when needed
    When I enter a new email address
    And I enter the passphrase ""
    Then I should see a "Send link" button
    And I should NOT see a "Sign in" button
    And I should NOT see a "Sign up" button
    When I enter the passphrase "1"
    Then I should NOT see a "Send link" button
    And I should see a "Sign in" button
    And I should see a "Sign up" button

  Scenario Outline: Creating an account requires email verification: <method>
    When I sign up with <method>
    Then I should see "Click the link in the email"
    And I should see my email address
    And I should see a "Verify code" button
    And I should have an email with subject "Confirm Your Email"
    When I enter the proper code
    Then I should be signed in

    Examples:
      | method |
      | an email code |
      | a passphrase |

  Scenario: Creating an account requires email verification: an email link
    When I sign up with an email link
    Then I should see "Click the link in the email"
    When I click the link in the email
    Then I should be signed in

  @mobile
  Scenario: Existing account
    Given I have an existing account
    Then the screenshot "defaults_login-with-passphrase" should match

  Scenario Outline: Signing in with <method>
    Given I have an existing account
    When I sign in with <method>
    Then I should be signed in

    Examples:
      | method |
      | an email link |
      | an email code |
      | a passphrase |

