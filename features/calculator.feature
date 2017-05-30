@smoke
Feature: Testing cucumber

  Background:
    Given the calculator is cleared

  Scenario: [Test-1] Verify Cucumber work
  Description: This test is to verify cucumber works
    When I add 5 and 6
    Then the result should be 11