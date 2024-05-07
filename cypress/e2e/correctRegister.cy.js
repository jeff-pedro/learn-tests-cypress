import Register from '../support/pages/register/registerPage'

describe('Register page', () => {
  
  it('Fills out a form correctly to register a new user', () => {
    Register.accessRegisterPage()
    Register.fillForm(
      'sparrow@pirates.sea',
      'Jack Sparrow',
      'sparrow',
      'secret123'
    )
    Register.sumitRegister()
  })

})