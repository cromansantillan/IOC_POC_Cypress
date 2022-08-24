/// <reference types="cypress" />

it('Verify the login of The Store - Enter valid User Name and valid Password', () => {

  cy.visit('https://www.saucedemo.com/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();

})