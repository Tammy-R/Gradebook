import {loginPage} from "../page_object/login_page";
import {USER} from "../fixtures/constants";



describe ("Login module", () => {


    beforeEach(() => {
        cy.visit('/')
        loginPage.loginButton.click()
        cy.url().should('contain','/login')
    })

    it("Validate login page", () => {
        loginPage.userName.should('be.visible')
        loginPage.password.should('be.visible')
        loginPage.btnLogin.should('be.visible')
    })


    it("login user with valid credentials", () => {
        loginPage.login(USER.EMAIL,USER.PASSWORD)
        cy.url().should('contain','/gradebooks')
    })
})