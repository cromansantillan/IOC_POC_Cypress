/// <reference types="cypress" />

it('Display login errors - Enter invalid User Name and valid Password', () => {

  cy.visit('https://services.smartbear.com/samples/TestComplete12/smartstore/');
  cy.get('#menubar-my-account > .dropdown > .menubar-link').click();
  cy.get('#UsernameOrEmail').type('standard_user1');
  cy.get('#Password').type('secret_sauce');
  cy.get(':nth-child(4) > .btn').click();

})