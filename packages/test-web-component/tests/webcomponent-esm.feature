Feature: Web Component, ESM with injected client

  Scenario: The web component is loaded
    Given I am on "/injected-client.html"
    Then the screenshot "web-component-esm" should match