import { loginPage } from "../page_object/login_page"
import { diaryPage } from "../page_object/diary"
import { USER } from "../fixtures/constants"
import { profPage } from "../page_object/prof"
import faker from "faker";

let name = faker.name.firstName();
let surname = faker.name.lastName();

let url = 'https://upload.wikimedia.org/wikipedia/bs/c/c4/Homerova_slika.png'

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
        //  profPage.dropdown.click()
        // profPage.createProf.click()
        profPage.newProfessor(name, surname, url)
        profPage.removeImg.should('be.visible')
        profPage.moveUp.should('be.visible')
        profPage.moveDown.should('be.visible')
        profPage.submit.click()
        cy.url().should('contain', '/all-professors')
    })

    it("All professors", () => {
        // profPage.dropdown.click()
        // profPage.allProf.click()
        cy.wait(1000)
        profPage.profesorList.should('be.visible')
        profPage.filter.should('be.visible')
        profPage.filter.type('Tamara')
        profPage.filter.should('have.value', 'Tamara')

    })

    it("Create professor - no first name", () => {
        profPage.dropdown.click()
        profPage.createProf.click()
        profPage.newProfessor('', surname, url)
        profPage.submit.click()
        profPage.firstName.then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
        cy.url().should('contain', '/create-professor')
    })

   

})