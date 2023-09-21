Feature: Login action

   As a user
   I want to login into application

   Scenario: Login with invalid credentials
     Given I want to login into an online account
     When I fill the login form with invalid info
     Then I should error login message


    Scenario Outline: Login with invalid credentials
     Given I want to login into an online account
     When I fill the login form with invalid info "<username>" and "<password>"
     Then I should error login message  

     Examples:
         | username | password |
         | fail-1   | fail-2   |