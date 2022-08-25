/// <reference types="cypress" />

it('Allow a visitor to sign-up', () => {

  cy.visit('https://services.smartbear.com/samples/TestComplete12/smartstore/');
  cy.get('#menubar-my-account > .dropdown > .menubar-link').click();
  cy.contains('Register ').click();
  cy.get('#gender-male').click();
  cy.get('#FirstName').type('Cesar');
  cy.get('#LastName').type('Roman');
  cy.get(':nth-child(1) > .date-part').type('01');
  cy.get(':nth-child(2) > .date-part').type('June');
  cy.get(':nth-child(3) > .date-part').type('2001');
  cy.get('#Email').type('user001@mail.com');
  cy.get('#Username').type('user001');
  cy.get('#Password').type('Pass1234');
  cy.get('#ConfirmPassword').type('Pass1234');
})