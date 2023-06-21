/// <reference types = "Cypress"/>

describe ('mores assertions and navigation', ()=>{
    it ('should navigate to and back', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/index.html');
        cy.get('#loginurl').click();
        cy.location('pathname').should('eq', '/todo_frontend/login.html');
        // navigate back using url
        cy.get('[data-cy="home"]').click()

        // repeat to test back button
        cy.get('#loginurl').click();
        cy.location('pathname').should('eq', '/todo_frontend/login.html');
        cy.go('back');
        cy.location('pathname').should('equal', '/todo_frontend/index.html')
    })
})