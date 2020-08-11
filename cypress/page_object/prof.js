class Professors {

    get dropdown() {
        return cy.get('.dropdown')
    }

    get allProf() {
        return cy.get('[class="dropdown-item"]').eq(0)
    }

    get createProf() {
        return cy.get('[class="dropdown-item"]').eq(1)
    }

    get filter() {
        return cy.get('input.form-control')
    }

    get firstName() {
        return cy.get('[id="firstName"]')
    }

    get lastName() {
        return cy.get('[id="lastName"]')
    }

    get addImg() {
        return cy.get('button:contains("image")')
    }

    get imgUrl() {
        return cy.get('[placeholder="Image URL"]')
    }

    get removeImg() {
        return cy.get('.btn-sm').contains('Remove')
    }

    get moveUp() {
        return cy.get('.btn-sm').contains('up')
    }

    get moveDown() {
        return cy.get('.btn-sm').contains('down')
    }

    get submit() {
        return cy.get('button:contains("Submit")')
    }

    get profesorList() {
        return cy.get('.table-dark')
    }



    newProfessor(name, last, url) {
        this.firstName.type(name)
        this.lastName.type(last)
        this.addImg.click()
        this.imgUrl.type(url)
    }

}


export default Professors;
export const profPage = new Professors;