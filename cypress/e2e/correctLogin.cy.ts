describe('Login page', () => {
    it('Should fill out a login form correctly', () => {
        cy.visit('http://localhost:4200/#/home')
        cy.get('[data-test="loginUserName"]').type('sparrow')
        cy.get('[data-test="loginPassword"]').type('theblackpearl')
        cy.contains('button', 'login').click()
    })
})