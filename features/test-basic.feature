Feature: Making sure everything is working
  Background:
    Given the calculator is cleared

  @test-cucumber
  Scenario: Testing cucumber
    When I add "1" and "2"

  @test-chai
  Scenario: Testing chai, and chai as expected
    When I add "2" and "3"
    Then the result should be "5"
