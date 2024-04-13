/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
        login(name: string, password: string): Chainable<void>
        register(email: string, fullName: string, username: string, password: string): Chainable<void>
    }
}

Cypress.Commands.add('getByData', (selector) => {
    return cy.get(`[data-test="${selector}"]`)
})

Cypress.Commands.add('login', (name, password) => {
    cy.getByData('loginUserName').type(name)
    cy.getByData('loginPassword').type(password)
    cy.getByData('loginBtn').click()
    // cy.contains('a', '(Logout)').should('be.visible')
})

Cypress.Commands.add('register', (email, fullName, username, password) => {
    cy.contains('a', 'Register now').click()

    cy.get('[data-test="email"]').type(email)
    cy.get('[data-test="fullName"]').type(fullName)
    cy.get('[data-test="registerUserName"]').type(username)
    cy.get('[data-test="registerPassword"]').type(password)

    cy.contains('button', 'Register').click()
})