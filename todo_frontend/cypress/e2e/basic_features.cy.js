/// <reference types="Cypress"/>

describe('Utilising basic features', ()=>{
    it('uses contains', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html')
        cy.contains('TODO LIST APP');

        cy.get('h2').contains('TODO LIST APP');
    })

    it('simulates click event', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html')
        cy.get('#btn-create-todo').click()
        cy.get('form').should('exist');
        cy.get('.inputs').find('#btnclose').click();
        // Check to ensure no task was added;
        cy.get('.pendingTasklist').should('have.length', 1)
    })

    it('simulates typing actions', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html')
        cy.get('#btn-create-todo').click()
        cy.get('form').should('exist');
        cy.get('#txttaskname').type('Task 1')
        cy.get('#txttaskdesc').type('This is my first task')
        cy.get('#txtdeadline').type('2023-06-28')
        cy.get('#btnsubmit').click();
        cy.get('#btnclose').click();
    })

    it('explains assertions', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html');
        cy.get('h2').contains('TODO LIST APP').should('not.have.length.above', 1);
    })

    it('partial inputs', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html');
        cy.get('h2').contains('TODO LIST ').should('not.have.length.above', 1);
    })

    it('closes using a dropdown', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html');
        cy.get('#btn-create-todo').click()
        cy.get('form').should('exist');
        cy.get('#txttaskname').type('Task 1')
        cy.get('#txttaskdesc').type('This is my first task')
        cy.get('#txtdeadline').type('2023-06-28')
        // Actual selections
        cy.get('#select-action').select('cancel');

    })
})