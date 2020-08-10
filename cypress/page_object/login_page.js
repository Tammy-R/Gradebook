class LoginPage {

    get loginButton() {
        return cy.get('.router-link-active').contains('Sign in')
    }

get userName(){
    return cy.get('.form-control').eq(0)
}

get password() {
    return cy.get('.mt-3').eq(0)
}

get btnLogin() {
    return cy.get('.mt-3').eq(1)
}

login(email, pass) {
    if(email){
        this.userName.type(email)
    }
    if(pass){
        this.password.type(pass)
    }

    this.btnLogin.click()
}


}

export default LoginPage;
export const loginPage = new LoginPage;