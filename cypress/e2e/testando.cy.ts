describe('Register page', () => {
  it('should fill out a form and register one user', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click()
    cy.get('[data-test="email"]').type('sparrow@pirates.sea')
    cy.get('[data-test="fullName"]').type('Jack Sparrow')
    cy.get('[data-test="registerUserName"]').type('sparrow')
    cy.get('[data-test="registerPassword"]').type('theblackpearl')
    cy.contains('button', 'Register').click()
  })
})