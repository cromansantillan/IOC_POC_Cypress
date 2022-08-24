/// <reference types="cypress" />

it ('Call the API with a valid status ', () => {
    cy.visit('https://petstore.swagger.io');
    cy.request('GET', '/v2/pet/findByStatus?status=sold').then((response) => {
        expect(response.status).to.eq(200)
    });
})