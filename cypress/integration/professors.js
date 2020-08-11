import { loginPage } from "../page_object/login_page"
import { diaryPage } from "../page_object/diary"
import { USER } from "../fixtures/constants"
import { profPage } from "../page_object/prof"

describe("Proffesors module", () => {

    before(() => {
        cy.visit('/')
        loginPage.loginButton.click()
        loginPage.login(USER.EMAIL, USER.PASSWORD)
        cy.wait(1000)
        diaryPage.home.click()
        cy.url().should('contain', '/gradebooks')
    })

    it("Validate create professor page", () => {
        profPage.dropdown.click()
        profPage.createProf.click()
        profPage.firstName.should('exist')
            .should('be.visible')
        profPage.lastName.should('exist')
            .should('be.visible')
        profPage.addImg.should('exist')
            .should('be.visible')
        profPage.submit.should('exist')
            .should('be.visible')

    })

    it("Create professor", () => {
        // profPage.dropdown.click()
        profPage.newProfessor('Pera', 'Peric', 'url')
        profPage.removeImg.should('be.visible')
        profPage.moveUp.should('be.visible')
        profPage.moveDown.should('be.visible')
        profPage.submit.click()
        cy.url().should('contain', '/all-professors')
    })

    it.only("All professors", () => {
        profPage.dropdown.click()
        profPage.allProf.click()
        cy.wait(1000)
        profPage.profesorList.should('be.visible')
        profPage.filter.should('be.visible')
        profPage.filter.type('Tamara')
        profPage.filter.should('have.value', 'Tamara')

    })

})