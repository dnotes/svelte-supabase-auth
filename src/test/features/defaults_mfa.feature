@mfa
Feature: Default config, MFA

  Background:
    Given the default configuration
    And no providers
    And I am signed in with an existing account
    And I open the MFA panel

  Scenario: `I have an MFA token named {string}`
    When I click "add a new MFA token"
    And for "name" I enter "default"
    And I click "Generate new token"
    And I save the TOTP named "default"
    And I verify the "default" TOTP code
    And I open the MFA panel
    Then I should see an MFA token named "default"

  Scenario: Canceling MFA creation
    When I click "add a new MFA token"
    And for "name" I enter "default"
    And I click "Generate new token"
    And I click "Cancel"
    And I reload the page
    And I open the MFA panel
    Then I should see an MFA token named "default (unverified)"

  Scenario: `I delete the MFA token named {string}`
    Given I have an MFA token named "default"
    Then I should see "Warning! You have only ONE multi-factor authentication token"
    When I click the "Delete multi-factor authenticator default" link
    Then I should see a dialog with "Are you sure you want to delete"
    Then I should NOT see an MFA token named "default"
    Then I should NOT see "Warning! You have only ONE multi-factor authentication token"

  Scenario: Adding a second MFA token
    Given I have an MFA token named "default"
    And I have an MFA token named "backup #1"
    Then I should see an MFA token named "default"
    And I should see an MFA token named "backup #1"
    And I should NOT see "Warning! You have only ONE multi-factor authentication token"

  Scenario Outline: Signing in requires the MFA token if there is one (<method>)
    Given I have an MFA token named "default"
    And I am not signed in
    When I sign in with <method>
    Then I should see an MFA challenge
    When I verify the "default" code
    Then I should be signed in

    Examples:
      | method |
      | an email link |
      | a passphrase |

  Scenario Outline: Signing in with two codes gives you a choice (<method>)
    Given I have an MFA token named "default"
    And I have an MFA token named "backup 1"
    And I am not signed in
    When I sign in with <method>
    Then I should see an MFA challenge
    When for "MFA code:" I select "backup 1"
    And I verify the "backup 1" code
    Then I should be signed in

    Examples:
      | method |
      | an email link |
      | a passphrase |
