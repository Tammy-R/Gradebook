import { registerPage } from "../page_object/register_page"
// import {faker} from "faker";

// const faker = require('faker');
// let randomName = faker.name.firstName();
// let randomLastName = faker.name.lastName();
// let randomEmail = faker.internet.email();
// let randomPass = faker.internet.password();

let randomName = "Jane";
let randomLastName = "Doe";
let randomEmail = "jane@doe.com";
let randomPass = "Vivify20";

describe("Register new user", () => {

    beforeEach(() => {
        cy.visit('/')
        registerPage.registerButton.click()
        cy.url().should('eq', 'https://gradebook.vivifyideas.com/register')
    })

    it("Validate register page", () => {
        // registerPage.registerButton.click()
        // cy.url().should('eq','https://gradebook.vivifyideas.com/register')
        registerPage.firstName.should('be.visible')
            .should('exist')
        registerPage.lastName.should('be.visible')
            .should('exist')
        registerPage.password.should('be.visible')
            .should('exist')
        registerPage.passConfirm.should('be.visible')
            .should('exist')
        registerPage.email.should('be.visible')
            .should('exist')
        registerPage.termsAndCond.should('be.visible')
            .should('exist')
        registerPage.submit.should('be.visible')
            .should('exist')
    })


    it("Register new user successfuly", () => {
        registerPage.register(randomName, randomLastName, randomPass, randomPass, randomEmail)
        cy.url().should('contain', '/gradebooks')
    })


})