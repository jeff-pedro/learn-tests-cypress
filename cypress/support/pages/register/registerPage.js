const el = require('./elements').ELEMENTS

class Register {
    accessRegisterPage() {
        cy.visit('http://localhost:4200/')
        cy.get(el.registerNow).click()
    }

    fillForm(email, fullName, username, password) {
        cy.get(el.email).type(email)
        cy.get(el.fullName).type(fullName)
        cy.get(el.username).type(username)
        cy.get(el.password).type(password)    
    }

    sumitRegister() {
        cy.get(el.btnRegister).click()
    }

}

export default new Register()
