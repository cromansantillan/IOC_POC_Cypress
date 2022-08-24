/// <reference types="cypress" />

it('Display login errors - Enter invalid User Name and valid Password', () => {

  cy.visit('https://www.saucedemo.com/');
  cy.get('#user-name').type('standard_user1');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();

})