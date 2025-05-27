Feature: Smoke Test

    Scenario: Successful login with valid data credentials
        Given I open the login page
        When I enter username "standard_user" and I enter password "secret_sauce"
        And I click the login button
        Then I should be redirected to the inventory page
        When I click to add to cart
        And I click cart button
        Then I got redirected to cart page
        And I found product of "Sauce Labs Bolt T-Shirt" exist
        And The price is "$15.99"

    Scenario: Successful add to cart
        Given I open the login page
        When I enter username "standard_user" and I enter password "secret_sauce"
        And I click the login button
        Then I should be redirected to the inventory page
        When I click to add to cart
        And I click cart button
        Then I got redirected to cart page
        And I found product of "Sauce Labs Bolt T-Shirt" exist
        And The price is "$15.99"
