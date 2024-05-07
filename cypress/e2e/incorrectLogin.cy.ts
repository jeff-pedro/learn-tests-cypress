describe('Login page', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home')

        cy.intercept('POST', 'http://localhost:3000/user/login', {
            statusCode: 401
        }).as('stubPost')
    })
    
    it('Verify message of required fields', () => {
        cy.contains('User name is required!').should('be.visible')
        cy.contains('Password is required!').should('be.visible')
    })

    it('Should fill out a form with incorrect login values', () => {
        cy.login('sparrow', '123456')
        cy.wait('@stubPost')
    })
})