describe('Login page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
    })

    it('Should fill out a login form correctly and log in', () => {
        cy.get('[data-test="loginUserName"]').type('sparrow')
        cy.get('[data-test="loginPassword"]').type('theblackpearl')
        cy.contains('button', 'login').click()
    })
})