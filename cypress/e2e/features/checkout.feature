Feature: Checkout Functionality

    Scenario: Successful checkout t-shirt
        Given I open the login page
        When I enter username "standard_user" and I enter password "secret_sauce"
        And I click the login button
        And I should be redirected to the inventory page
        And I click to add to cart
        And I click cart button
        Then I got redirected to cart page
        And I found product of "Sauce Labs Bolt T-Shirt" exist
        And The price is "$15.99"
        When I click checkout button
        And I should be redirected to checkout step one page
        And I fill data firstname "user" and lastname "user name" and post code "1234"
        And I click continue button
        Then I should be redirected to checkout step two
        And I should have shipping information "Free Pony Express Delivery!"

