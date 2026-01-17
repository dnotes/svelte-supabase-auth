@webcomponents
Feature: Web Components

  As a developer
  I want to be able to use the Supabase Auth web component in my application
  To simplify the process of adding authentication in any front-end environment

  Scenario: The cjs web component loads on a plain HTML page
    Given I load the web component
    Then I should see an "Email address" input
    And the screenshot "webcomponent-umd" of the "main" element should match to within 2%
    And all accessibility tests should pass

  @skip-ci
  Scenario: The esm web component loads on a plain HTML page
    Given I visit "/webcomponent-esm"
    Then I should see an "Email address" input
    And the screenshot "webcomponent-esm" of the "main" element should match to within 2%
    And all accessibility tests should pass