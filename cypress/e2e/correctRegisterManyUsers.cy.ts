describe('Register page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home')
  })

  it('Fills out a form correctly to register a new user', () => {
    cy.register(
      'sparrow@pirates.sea',
      'Jack Sparrow',
      'sparrow',
      'secret123'
    )
  })

  const users = require('../fixtures/users.json')

  users.forEach((user) => {

    it(`Should fill out a form correctly to register a new user ${user.fullName}`, () => {
      cy.register(
        user.email,
        user.fullName,
        user.userName,
        user.password
      )
    })

  })
})