/// <reference types = "Cypress"/>

describe('submit form (custom command)', () => {
    beforeEach(()=>{
        cy.visit('/todo.html');
    })

    it('creates task using custom command', ()=>{
        cy.visit('/todo.html')
        cy.get('#btn-create-todo').click()
        cy.get('form').should('exist');

        cy.createTask();
    })
})