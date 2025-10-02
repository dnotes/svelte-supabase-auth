@mobile
Feature: Basic functionality

  Scenario: The built component renders in an app
    Given I am on "/"
    Then I should see an "Email address" input
    And I should see a "Passphrase" input