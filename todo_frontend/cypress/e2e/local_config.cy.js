/// <reference types = "Cypress"/>

describe('Explains local configuration', {
    defaultCommandTimeout:10000, // the task is considered a failure if it doesnt complete withing this time
    execTimeout: 5000, //execute within the time for a test case
    taskTimeout: 4000 //tasks are custom functions , execute within the time or fail
}, ()=>{
    it('should submit the form', {
        browser: 'chrome'
    }, ()=>{
        cy.visit('/todo.html');
    })
})