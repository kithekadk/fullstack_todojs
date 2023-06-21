/// <reference types = "Cypress"/>

describe ('Tests a create todo flow', ()=>{
    // it ('should navigate to and back', ()=>{
    //     cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html')
    //     cy.get('#btn-create-todo').click()
    //     cy.get('form').should('exist');
    //     cy.get('#btnsubmit').should('not.have.attr', 'disabled');
    //     cy.get('#txttaskname').type('Task 1')
    //     cy.get('#txttaskdesc').type('This is my first task')
    //     cy.get('#txtdeadline').type('2023-06-28')

    //     // Check if the button is disabled for some time
    //     cy.get('#btnsubmit').click();
    //     cy.get('#btnsubmit').contains('Sending...');
    //     cy.get('#btnsubmit').should('have.attr', 'disabled');
    // })

    // it('used method chaining', ()=>{
    //     cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html')
    //     cy.get('#btn-create-todo').click()
    //     cy.get('form').should('exist');
    //     cy.get('#btnsubmit').should('not.have.attr', 'disabled');
    //     cy.get('#txttaskname').type('Task 1')
    //     cy.get('#txttaskdesc').type('This is my first task')
    //     cy.get('#txtdeadline').type('2023-06-28')
    //     cy.get('#btnsubmit').click().should('contain', 'Sending...');
    // })

    // it('used values constant', ()=>{
    //     cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html')
    //     cy.get('#btn-create-todo').click()
    //     cy.get('form').should('exist');
    //     cy.get('#btnsubmit').should('not.have.attr', 'disabled');
    //     cy.get('#txttaskname').type('Task 1')
    //     cy.get('#txttaskdesc').type('This is my first task')
    //     cy.get('#txtdeadline').type('2023-06-28')
    //     const btn = cy.get('#btnsubmit');
    //     btn.click().should('contain', 'Sending...');
    // })

    // it('used alias', ()=>{
    //     cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html')
    //     cy.get('#btn-create-todo').click()
    //     cy.get('form').should('exist');
    //     cy.get('#btnsubmit').should('not.have.attr', 'disabled');
    //     cy.get('#txttaskname').type('Task 1')
    //     cy.get('#txttaskdesc').type('This is my first task')
    //     cy.get('#txtdeadline').type('2023-06-28')
    //     // Using an alias
    //     cy.get('#btnsubmit').as('submitbtn');
    //     cy.get('@submitbtn').click().should('contain', 'Sending...');
    // })

    it('uses then function', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html')
        cy.get('#btn-create-todo').click()
        cy.get('form').should('exist');
        cy.get('#btnsubmit').should('not.have.attr', 'disabled');
        cy.get('#txttaskname').type('Task 1')
        cy.get('#txttaskdesc').type('This is my first task')
        cy.get('#txtdeadline').type('2023-06-28')

        // then here
        cy.get('#btnsubmit').then((el)=>{
            expect(el.attr('disabled')).to.be.undefined
        })
        cy.get('#btnsubmit').click().then((el)=>{
            expect(el.attr('disabled')).to.exist
            expect(el.val()).to.equal('Sending...')
            expect(el.val()).to.contain('Sending...')
        })
    })

    it('uses loses focus', ()=>{
        cy.visit('http://127.0.0.1:5500/todo_frontend/todo.html')
        cy.get('#btn-create-todo').click()
        cy.get('form').should('exist');
        cy.get('#txttaskname').focus()
        cy.get('#txttaskname').blur()
    })
})