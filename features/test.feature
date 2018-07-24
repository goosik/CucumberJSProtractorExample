Feature: Create automation using cucumberjs

  Scenario: Create user
    Given I open page "http://www.way2automation.com/angularjs-protractor/webtables/"
    When I can create user with following data:
      | First Name | Last Name | User Name | Password | Customer    | Role  | E-mail        | Cell Phone |
      | Aleks      | Smith     | aleks     | pass     | Company AAA | Admin | test@test.com | 333        |
    Then I can see "Aleks Smith" in the board
    When I can create user with following data:
      | First Name | Last Name | User Name | Password | Customer    | Role  | E-mail         | Cell Phone |
      | Aleks2     | Smith2    | aleks     | pass     | Company BBB | Admin | test1@test.com | 111        |
    When I can edit "Aleks Smith" to:
      | First Name |
      | Aleksq     |
    Then I can see "Aleksq Smith" in the board
    And I can delete "Aleksq Smith" from the board
    Then I can not see "Aleksq Smith" in the board