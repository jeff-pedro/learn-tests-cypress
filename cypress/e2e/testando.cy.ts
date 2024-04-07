describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click()
    cy.get('[formcontrolname="email"]').type('sparrow@pirates.sea')
    cy.get('[formcontrolname="fullName"]').type('Jack Sparrow')
    cy.get('[formcontrolname="userName"]').type('sparrow')
    cy.get('[formcontrolname="password"]').type('theblackpearl')
    cy.contains('button', 'Register').click()
  })
})