Cypress.Commands.add('login', (name, password) => {
    cy.get('[data-test="loginUserName"]').type(name)
    cy.get('[data-test="loginPassword"]').type(password)
    cy.get('[data-test="loginBtn"]').click()
    cy.contains('a', '(Logout)').should('be.visible')
})

Cypress.Commands.add('register', (email, fullName, username, password) => {
    cy.contains('a', 'Register now').click()

    cy.get('[data-test="email"]').type(email)
    cy.get('[data-test="fullName"]').type(fullName)
    cy.get('[data-test="registerUserName"]').type(username)
    cy.get('[data-test="registerPassword"]').type(password)
    
    cy.contains('button', 'Register').click()
})