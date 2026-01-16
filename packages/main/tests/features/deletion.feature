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
    Then all accessibility tests should pass
    When I enter the proper code
    And I click "Delete account"
    Then I should see a dialog with "Account deleted successfully."
    And I should see a "Send link" button
    And all accessibility tests should pass

  Scenario: Wrong code
    And for "Enter code" I enter "abcdef"
    And I click "Delete account"
    Then I should see an "Invalid code" message
    And all accessibility tests should pass
