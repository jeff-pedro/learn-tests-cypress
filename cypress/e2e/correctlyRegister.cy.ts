describe('Register page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home')
  })

  it('Fills out a form correctly to register a new user', () => {
    cy.register(
      'sparrow@pirates.sea',
      'Jack Sparrow',
      'sparrow',
      'theblackpearl'
    )
  })
})