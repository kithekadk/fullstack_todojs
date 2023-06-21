/// <reference types="Cypress"/>

describe('Accessing elements', ()=>{
    it('accesses by attribute', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html');
        cy.get('div');
    })

    it('accesses by class', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html');
        cy.get('.main')
    })

    it('accesses by id', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html');
        cy.get('#btn-create-todo')
    })

    it('accesses date input', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html');
        cy.get('[type="date"]')
    })

    it('accesses with reference to parent', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html');
        cy.get('.title h2');
    })
})