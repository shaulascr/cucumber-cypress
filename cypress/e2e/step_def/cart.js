const {Given, When, Then, And} = require('cypress-cucumber-preprocessor/steps');

const baseUrl = 'https://www.saucedemo.com/';

Given ('I open the login page', () => {
    cy.visit(baseUrl);
}) 

When ('I enter username {string} and password {string}', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);

})

When ('I click the login button', () => {
    cy.get('[data-test="login-button"]').click();
})

When ('I should be redirected to the inventory page', () => {
    cy.url().should('include', '/inventory.html');
})

When('I click to add to cart', () =>{
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
})
When('I click cart button', () => {
    cy.get('[data-test="shopping-cart-link"]').click();

})

Then ('I got redirected to cart page', () => {
    cy.url().should('include', '/cart.html');
})

Then('I found product of {string} exist', (item) => {
    cy.log(item);
    cy.get('[data-test="inventory-item-name"]').should('have.text', item);
})

Then('The price is {string}', (price) =>{
    cy.get('[data-test="inventory-item-price"]').should('have.text', price);
})