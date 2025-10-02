@deletion
Feature: Delete an account

  As a user
  I need to be able to delete my account
  To preserve my privacy and autonomy

  Background:
    Given the following configuration:
      | deleteAccountFunction | delete_user_account |
    And no providers
    And I am signed in with an existing account
    When I open the security panel
    And I click "Delete account"

  Scenario: Successful account deletion
    And I enter the proper code
    And I click "Delete account"
    Then I should see a dialog with "Account deleted successfully."
    And I should see a "Send link" button

  Scenario: Wrong code
    And for "Enter code" I enter "abcdef"
    And I click "Delete account"
    Then I should see an "Invalid code" message
