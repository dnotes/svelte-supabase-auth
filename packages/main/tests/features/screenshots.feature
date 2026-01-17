@screenshots @skip-ci
Feature: Screenshots

  Background:
    Given I am on the home page

  Scenario: Login with passphrase
    Then I screenshot "screenshots_login-with-passphrase"

  Scenario: Login with social or link
    Given the following configuration:
      | providers | google,github |
      | initialView | sign_in |
    Then I screenshot "screenshots_login-with-social-or-link"

  Scenario: Multi-factor authentication
    And I am logged in with an existing account
    When I open the MFA panel
    And I click "add a new MFA token"
    Then I screenshot "screenshots_multi-factor-authentication"

  Scenario: Password reset
    When I click "Reset your passphrase"
    Then I screenshot "screenshots_password-reset"

  Scenario: Localization
    When I visit "/"
    And I click "العربية"
    Then I screenshot "screenshots_localization"