describe('Login page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
    })

    it('Should fill out a login form correctly and log in', () => {
        cy.login('sparrow', 'secret123')
    })
})