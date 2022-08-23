/// <reference types="cypress" />

it('Verify the login of The Store - User giva a correct username and password', () => {

  cy.visit('https://cms.demo.katalon.com/my-account');
  cy.get('#username').type('customer');
  cy.get('#password').type('crz7mrb.KNG3yxv1fbn');
  cy.get('.woocommerce-button').click();

})