Feature: Web Component, UMD with configuration

  Scenario: The web component is loaded
    Given I load the web component
    Then the screenshot "web-component-umd" should match

  Scenario: The web component is loaded
    Given I am on "/"
    Then the screenshot "web-component-umd" should match