Feature: Services function
  As a user i want to check the service on Harrow website

  Scenario: User should navigate to service page successfully
    Given I am on Home Page
    When I click on services button
    Then I should navigate to service page successfully

    Scenario: verify text when user close Service page
      Given I am on Home Page
      When I click on service button
      And I should navigate to service page successfully
      And I click on close button
      Then I should see "SERVICES" text