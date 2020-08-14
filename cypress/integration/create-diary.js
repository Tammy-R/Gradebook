import { loginPage } from "../page_object/login_page"
import { diaryPage } from "../page_object/diary"
import { USER } from "../fixtures/constants"





describe("Create Gradebook", () => {


    beforeEach(() => {

        cy.visit('/')
        loginPage.loginButton.click()
        loginPage.login(USER.EMAIL, USER.PASSWORD)
        cy.wait(1000)
        diaryPage.createDiary.click()
        cy.url().should('contain', '/create-gradebook')

    })



    it("Validate Create Gradebook page", () => {
        diaryPage.title.should('be.visible')
        diaryPage.professor.should('be.visible')
        diaryPage.submit.should('exist')
    })


    it("Create Diary", () => {
        diaryPage.create('New diary')
        diaryPage.title.should('have.value', 'New diary')
        cy.url().should('contain', '/gradebooks')
    })

    it("Create Diary - no name or professor", () => {
        diaryPage.submit.click()
        diaryPage.alert.should('exist')
            .should('be.visible')
        cy.url().should('contain', '/create-gradebook')
    })

    it("Create Diary - no title", () => {
        diaryPage.professor.select("56")
        diaryPage.submit.click()
        diaryPage.alert.should('exist')
            .should('be.visible')
        cy.url().should('contain', '/create-gradebook')
    })

    it("Create Diary - no professor", () => {
        diaryPage.title.type('title')
        diaryPage.submit.click()
        diaryPage.alert.should('exist')
            .should('be.visible')
        cy.url().should('contain', '/create-gradebook')
    })

})