@webcomponents
Feature: Web Components

  As a developer
  I want to be able to use the Supabase Auth web component in my application
  To simplify the process of adding authentication in any front-end environment

  Scenario: The cjs web component loads on a plain HTML page
    Given I load the web component
    Then I should see an "Email address" input
    And the screenshot "web-component-script-configured" should match to within 3%

  Scenario: The esm web component loads on a plain HTML page
    Given I visit "/webcomponent-module-injected.html"
    Then I should see an "Email address" input
    And the screenshot "web-component-module-injected" should match to within 3%