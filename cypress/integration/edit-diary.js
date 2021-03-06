import { loginPage } from "../page_object/login_page"
import { diaryPage } from "../page_object/diary"
import { USER } from "../fixtures/constants"
import { newStudent } from "../page_object/student"
import faker from "faker";

let name = faker.name.firstName();
let lastName = faker.name.lastName();
let comment = faker.lorem.sentence();
let url = 'https://citymagazine.rs/wp-content/uploads/2019/10/homer-simpson-1213x564.jpg'

describe("Edit diary", () => {

    //Iz nekog razloga kad stavim u begore da se uloguje user i kreira dnevnik, a u beforeEach da ulazi na stranicu moj dnevnik test puca, klikne na dugme u meniju ali ne otvori stranicu

    // before(() => {
    //     cy.visit('/')
    //     loginPage.loginButton.click()
    //     loginPage.login(USER.EMAIL, USER.PASSWORD)
    //     cy.wait(1000)
    //     diaryPage.createDiary.click()
    //     cy.url().should('contain', '/create-gradebook')
    //     diaryPage.create('New diary')
    // })


    beforeEach(() => {
        cy.visit('/')
        loginPage.loginButton.click()
        loginPage.login(USER.EMAIL, USER.PASSWORD)
        cy.wait(1000)
        diaryPage.home.click()
        cy.wait(1000)
        diaryPage.search('New diary')
    })


    it("Edit diary - change professor", () => {
        diaryPage.editDiary.click()
        diaryPage.professor.select('56')
            .should('contain', 'Tamara')
        diaryPage.submit.click()
        cy.url().should('contain', '/single-gradebook')

    })

    it("Edit diary - add student", () => {
        newStudent.addStudent.click()
        cy.wait(1000)
        newStudent.add(name, lastName, url)
        newStudent.studentList.should('contain', lastName)
        newStudent.diaryName.should('contain', 'New')
        cy.expect('https://gradebook.vivifyideas.com/single-gradebook/').to.eq('https://gradebook.vivifyideas.com/single-gradebook/')

    })

    it("Edit diary - can't add student", () => {
        newStudent.addStudent.click()
        cy.wait(1000)
        newStudent.add('Jane', '', '')
        cy.url().should('contain','/add-student')

    })


    it("Edit diary - add comment", () => {
        diaryPage.comment.type('First comment')
        diaryPage.postComment.click()
        diaryPage.deleteComment.should('be.visible')
    })


    it("Edit diary - delete comment", () => {
        diaryPage.deleteComment.click()
        cy.log('Comment has been deleted')
        cy.get('.comment-box').should('not.exist')


    })








})