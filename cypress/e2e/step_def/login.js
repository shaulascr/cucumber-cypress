const {Given, When, Then} = require('cypress-cucumber-preprocessor/steps');

const baseUrl = 'https://www.saucedemo.com/';

Given ('I open the login page', () => {
    cy.visit(baseUrl);
});

When ('I enter username {string} and I enter password {string}', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);

});

When ('I click the login button', () => {
    cy.get('[data-test="login-button"]').click();
})

Then ('I should be redirected to the inventory page', () => {
    cy.url().should('include', '/inventory.html');
})