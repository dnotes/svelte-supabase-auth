@defaults @email
Feature: Default config, email login

  Background:
    Given the default configuration
    And no providers

  @mobile
  Scenario: Visual regression for login form with no providers
    Then the screenshot "defaults_login-with-passphrase" should match

  Scenario: Visual regression for login form with link only
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

  Scenario: The passphrase is the same width as the email address
    Then the "Passphrase" input and the "Email address" input should be the same width
    When I enter the pwned passphrase "123456"
    And I click the "Sign up" button
    Then I should see a "data breach" error
    And the "Passphrase" input and the "Email address" input should be the same width

  Scenario: When a passphrase is entered, the sign up button shows
    When I enter the passphrase "123456"
    Then I should see a "Sign up" button
    And the screenshot "defaults_email-with-passphrase" should match

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
    And I click the "Verify code" button
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

  Scenario: Invalid email format
    Given for "Email address" I enter "example@example.com\\"
    And I click the "Send link" button
    Then I should see an "email address: invalid format" message

  @config
  Rule: Configurations should be handled gracefully

  the component may be configured differently from the server;
  in such cases, the functionality should still work as the user would expect.

    @email-no-confirm @misconfigurations
    Scenario: Email confirmation disabled

      the server is configured to require email confirmation
      but the component is configured NOT to require it

      Given the following configuration:
        | auth.email.enable_confirmations | false |
      When I sign up with a passphrase
      Then I should see "Click the link in the email"

    @email-no-signup @misconfigurations
    Scenario: New email accounts are disabled

      the server is configured to allow email signup
      but the component is configured NOT to allow new accounts via email

      Given the following configuration:
        | auth.email.enable_signup | false |
      When for "Email address" I enter "example@example.com"
      And for "Passphrase" I enter "this is a new passphrase"
      Then I should NOT see a "Sign up" button

    @email-no-signup @misconfigurations
    Scenario: All new accounts are disabled

      the server is configured to allow email signup
      but the component is configured NOT to allow new accounts

      Given the following configuration:
        | auth.enable_signup | false |
      When for "Email address" I enter "example@example.com"
      And for "Passphrase" I enter "this is a new passphrase"
      Then I should NOT see a "Sign up" button

    @email-disabled @misconfigurations
    Scenario: Email authentication is disabled

      the server is configured to allow email authentication,
      but the component is configured NOT to allow it

      Given the following configuration:
        | auth.email | false |
      Then I should NOT see an "Email address" input
      And I should see "No authentication methods"

    @email-disabled @misconfigurations
    Scenario: Email authentication is disabled

      the server is configured to allow email authentication,
      but the component is configured NOT to allow it

      Given the following configuration:
        | auth.email.enabled | false |
      Then I should NOT see an "Email address" input
      And I should see "No authentication methods"

    @auth-disabled @misconfigurations
    Scenario: Authentication is disabled

      the server is configured to allow authentication,
      but the component is configured NOT to allow it

      Given the following configuration:
        | auth | false |
      Then I should NOT see an "Email address" input
      Then I should see "No authentication methods"

    @auth-disabled @misconfigurations
    Scenario: Authentication is disabled

      the server is configured to allow authentication,
      but the component is configured NOT to allow it

      Given the following configuration:
        | auth.enabled | false |
      Then I should NOT see an "Email address" input
      Then I should see "No authentication methods"
