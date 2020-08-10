import {registerPage} from "../page_object/register_page"
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

describe ("Register new user",() => {

beforeEach(() => {
    cy.visit('/')
    registerPage.registerButton.click()
    cy.url().should('eq','https://gradebook.vivifyideas.com/register')
})

    it("Validate register page",() => {
        // registerPage.registerButton.click()
        // cy.url().should('eq','https://gradebook.vivifyideas.com/register')
        registerPage.firstName.should('be.visible')
        registerPage.lastName.should('be.visible')
        registerPage.password.should('be.visible')
        registerPage.passConfirm.should('be.visible')
        registerPage.email.should('be.visible')
        registerPage.termsAndCond.should('be.visible')
        registerPage.submit.should('be.visible')
    } )


    it("Register new user successfuly", () => {
        registerPage.register(randomName, randomLastName, randomPass, randomPass,randomEmail)
        cy.url().should('contain', '/gradebooks')
    })


} )