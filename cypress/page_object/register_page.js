export default class RegisterPage {

    get registerButton() {
        return cy.get('.nav-link').contains('Register')
    }

    get firstName() {
        return cy.get ('#firstName')
    }


    get lastName (){
        return cy.get('#lastName')
    }

    get password() {
        return cy.get('#password')
    }


    get passConfirm() {
        return cy.get('#passwordConfirmation')
    }

    get email() {
        return cy.get('#email')
    }

    get termsAndCond() {
        return cy.get('#termsAndConditions')
    }

    get submit() {
        return cy.get('.btn-primary').contains('Submit')
    }    


    register(name, lastName, pass, confirmPass, mail){
        if(name){
            this.firstName.type(name)
        }
        if(lastName){
            this.lastName.type(lastName)
        }
        if (pass){
            this.password.type(pass)
        }
        if(confirmPass){
            this.passConfirm.type(confirmPass)
        }
        if(mail){
            this.email.type(mail)
        }

        this.termsAndCond.click()
        this.submit.click()

    }

}

export const registerPage = new RegisterPage()
