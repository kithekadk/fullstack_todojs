// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createTask', ()=>{
    cy.get('#btnsubmit').click();
});

Cypress.Commands.addQuery('getById', (id)=>{
    let getFunction = cy.now('get', `[data-cy="${id}"]`) // now() allows to execute any cypress instruction immediately
    return () =>{
        let element = getFunction(); // executed when cypress actually runs your test instructions (i.e after queuing them)
        return element;
    }
})