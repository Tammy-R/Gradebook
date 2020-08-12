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
    } )


    it("Register new user successfuly", () => {
        registerPage.register(randomName, randomLastName, randomPass, randomPass,randomEmail)
        cy.url().should('contain', '/gradebooks')
    })

    it("Register new user unsuccessfuly - no first name", () => {
        registerPage.register('', randomLastName, randomPass, randomPass,randomEmail)
        registerPage.firstName.then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
        cy.url().should('contain', '/register')
    })

    it("Register new user unsuccessfuly - no last name", () => {
        registerPage.register(randomName, '', randomPass, randomPass,randomEmail)
        registerPage.lastName.then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
        cy.url().should('contain', '/register')
    })

    it("Register new user unsuccessfuly - wrong password", () => {
        registerPage.register(randomName, randomLastName, 'randomPass',randomEmail)
        registerPage.password.then(($input) => {
            expect($input[0].validationMessage).to.eq('Please match the requested format.')
        })
        cy.url().should('contain', '/register')
    })

    
} )