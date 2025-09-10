Feature: Passphrases

  As a user
  I want help creating a passphrase that is as secure as possible

  Background:
    Given the following configuration:
    | passwordPolicy.minLength | 10 |
    And no providers
    And I enter a new email address

  @dismiss-dialog
  Rule: Checking passphrase strength

    Scenario: Clicking Signup shows a dialog and enables feedback
      When I enter the pwned passphrase "qwerty"
      Then I should see the "data breach" warning
      When I click "Sign up"
      Then I should see a dialog with "Your passphrase has the following issues"

    Scenario: Passphrase checks only trigger after 6 characters
      When I enter the pwned passphrase "qwert"
      And I wait 2 seconds
      Then I should NOT see the "data breach" warning