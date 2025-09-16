@passphrases
Feature: Passphrases

  As a user
  I want help creating a passphrase that is as secure as possible

  Background:
    Given no providers
    And I enter a new email address


  Scenario: Clicking the "Sign up" button shows a dialog and enables feedback
    Given I should not see an "at least 15 characters" error
    When I enter a pwned passphrase of 6 characters
    When I click "Sign up"
    Then I should see an "at least 15 characters" error
    And I should see a "data breach" error


  Scenario: Passphrases are checked against HIBP at signup

    "When processing a request to establish or change a password,
    verifiers SHALL compare the prospective secret against a blocklist
    that contains known commonly used, expected, or compromised passwords."

    When I enter a pwned passphrase of 15 characters
    Then there should have been 0 requests to "api.pwnedpasswords.com"
    When I click the "Sign up" button
    Then I should see the "at least 1 data breach" warning
    And there should have been 1 request to "api.pwnedpasswords.com"


  Scenario: Passphrases are checked for context-specific words

    "[a blocklist that contains] Context-specific words, such as the name
    of the service, the username, and derivatives thereof"

    When I enter the passphrase "svelte-supabase-auth-123456"
    And I click the "Sign up" button
    Then I should see the "not repetitive or related to the site or your personal information" error


  Scenario: Passphrases are checked for repetitiveness
    When I enter the passphrase "0102030405060708090"
    And I click the "Sign up" button
    Then I should see the "not repetitive" error
    And I should NOT see the "at least 15 characters" error
    When I enter the passphrase "0102030405060708090a"
    And I click the "Sign up" button
    Then I should NOT see the "not repetitive" error


  Scenario: Passphrases should be 15 characters

    "Verifiers and CSPs SHALL require passwords that are used as a single-factor
    authentication mechanism to be a minimum of 15 characters in length."

    When I enter a passphrase of 6 characters
    And I click the "Sign up" button
    And I should see an "at least 15 characters" warning
    When I enter a passphrase of 15 characters
    Then I should NOT see the "at least 15 characters" warning


  Scenario: Passphrases may be >= 8 characters if MFA is enforced

    "Verifiers and CSPs MAY allow passwords that are only used as part of
    multi-factor authentication processes to be shorter but SHALL require them
    to be a minimum of eight characters in length."

    Given the following configuration:
      | auth.mfa.required | true |
    When I enter a passphrase of 6 characters
    And I click the "Sign up" button
    Then I should see an "at least 8 characters" warning
    When I enter a passphrase of 8 characters
    Then I should NOT see an "at least 8 characters" warning


  Scenario: Passphrases can be at least 64 characters long

    "Verifiers and CSPs SHOULD permit a maximum password length of at least 64 characters."

    When I enter the passphrase "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-_"
    And I click the "Sign up" button
    Then I should see the "enter the verification code" message


  Scenario: Passphrases allow all printing ASCII characters and spaces

    "Verifiers and CSPs SHOULD accept all printing ASCII [RFC20] characters and the
    space character in passwords."

    When I enter the passphrase " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    And I click the "Sign up" button
    Then I should see the "enter the verification code" message


  Scenario: Passphrases may contain Unicode characters, which count as a single character

    "Verifiers and CSPs SHOULD accept Unicode [ISO/ISC 10646] characters in passwords. Each
    Unicode code point SHALL be counted as a single character when evaluating password length."

    "Subscribers choosing passwords that contain Unicode characters SHOULD be advised that
    some endpoints may represent some characters differently, which would affect their ability
    to authenticate successfully."

    # 14 characters
    When I enter the passphrase "😛🤣➡❖¥©∆𝔂♜🁰🁲அሴ人"
    And I click the "Sign up" button
    Then I should see the "at least 15 characters" warning
    # 15 characters
    When I enter the passphrase "😛🤣➡❖¥©∆𝔂♜🁰🁲அሴ人1"
    And I click the "Sign up" button
    Then I should see the "enter the verification code" message
    # TODO
    # And I should see the "Unicode characters" message

  Scenario: Changing a passphrase

    Given I am signed in with an existing account
    When I click the "Account security" link
    And I click the "Change your passphrase" button
    And I enter the proper code
    And I enter a passphrase of 15 characters
    And I click the "Change your passphrase" button
    Then I should see the "Passphrase changed successfully." message

