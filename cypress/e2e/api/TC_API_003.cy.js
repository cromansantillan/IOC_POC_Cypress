/// <reference types="cypress" />

it ('Call the API with a valid status but invalid path', () => {
    cy.visit('https://petstore.swagger.io');
    cy.request({ method: 'POST', url: '/v2/pet/findByStatus?status=sold', failOnStatusCode: false,})  
             .then((response) => {
                expect(response.status).to.eq(405)
            });
})