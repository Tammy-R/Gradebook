class Student {

    get addStudent() {
        return cy.get('.btn-primary').contains('Add Student')
    }

    get studName() {
        return cy.get('[name=firstName]')
    }

    get studLastName() {
        return cy.get('[name=lastName]')
    }

    get studBtnImage() {
        return cy.get('.mb-3').contains('Add')
    }

    get studUrl() {
        return cy.get('[placeholder="Image URL"]')
    }

    get studSubmit() {
        return cy.get('.mt-3').contains('Submit')
    }

    get studentList() {
        return cy.get('.table-dark').find('>tbody').eq(0).find('>tr').eq(0).find('>td').eq(3).find('>ul').eq(0).find('>li').eq(0)
        //cy.get('.table-dark').find('li').eq(1)
    }

    get diaryName() {
        return cy.get('.table-dark').find('>tbody').eq(0).find('>tr').eq(0).find('>td').eq(1)
    }

    add(stName, stLastName, stUrl) {
        this.studName.type(stName)
        this.studLastName.type(stLastName)
        this.studBtnImage.click()
        this.studUrl.type(stUrl)
        this.studSubmit.click()
    }












}

export default Student;
export const newStudent = new Student;