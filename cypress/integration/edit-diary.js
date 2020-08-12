import { loginPage } from "../page_object/login_page"
import { diaryPage } from "../page_object/diary"
import { USER } from "../fixtures/constants"
import { newStudent } from "../page_object/student"


describe("Edit diary", () => {


    beforeEach(() => {
        cy.visit('/')
        loginPage.loginButton.click()
        loginPage.login(USER.EMAIL, USER.PASSWORD)
        cy.wait(1000)
        diaryPage.home.click()
        cy.url().should('contain', '/gradebooks')
        diaryPage.search('New')
    })

    // beforeEach(() => {
    //     diaryPage.search('New')
    // })

    it("Edit diary - change professor", () => {
        diaryPage.editDiary.click()
        diaryPage.professor.select('56')
            .should('contain', 'Tamara')
        diaryPage.submit.click()
        cy.url().should('contain', '/single-gradebook')

    })

    it("Edit diary - add student", () => {
        // diaryPage.search('New')
        newStudent.addStudent.click()
        cy.wait(1000)
        newStudent.add('Jane', 'Doe', 'url')
        newStudent.studentList.should('contain', 'Doe')
        newStudent.diaryName.should('contain', 'New')
        cy.expect('https://gradebook.vivifyideas.com/single-gradebook/').to.eq('https://gradebook.vivifyideas.com/single-gradebook/')

    })

    it("Edit diary - can't add student", () => {
        // diaryPage.search('New')
        newStudent.addStudent.click()
        cy.wait(1000)
        newStudent.add('Jane', '', '')
        cy.url().should('contain','/add-student')

    })


    it("Edit diary - add comment", () => {
        // diaryPage.search('New')
        diaryPage.comment.type('First comment')
        diaryPage.postComment.click()
        diaryPage.deleteComment.should('be.visible')
    })


    it("Edit diary - delete comment", () => {
        // diaryPage.search('New')
        diaryPage.deleteComment.click()
        cy.log('Comment has been deleted')
        cy.get('.comment-box').should('not.exist')


    })








})