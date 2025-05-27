Feature: Login Functionality

    Scenario: Successful login with valid data credential
        Given I open the login page
        When I enter username "standard_user" and I enter password "secret_sauce"
        And I click the login button
        Then I should be redirected to the inventory page
