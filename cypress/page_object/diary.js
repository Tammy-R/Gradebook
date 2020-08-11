class DiaryPage {

    get createDiary() {
        return cy.get('.nav-link').eq(2).contains('Create Gradebook')
    }

    get title() {
        return cy.get('#title')
    }

    get professor() {
        return cy.get('#professor')
    }

    get submit() {
        return cy.get('.btn-primary').contains('Submit')
    }

    get home() {
        return cy.get('.nav-link').eq(0).contains('Gradebooks')
    }

    get nextBtn() {
        return cy.get('.ml-2').contains('Next')
    }

    get diaryList() {
        return cy.get('tbody')
    }

    
    get searchField() {
        return cy.get('.form-control')
    }

    get searchBtn() {
        return cy.get('.mt-3').contains('Search')
    }

    get selectDiary() {
        return cy.get('.table-dark').find('>tbody').eq(0).find('>tr').eq(0).find('>td').eq(0)
        // .find('>a').eq(0)
    }

    get deleteDiary() {
        return cy.get('.btn-danger').contains('Delete')
    }

    get editDiary() {
        return cy.get('.btn-warning').contains('Edit')
    }

    
    get comment() {
        return cy.get('[placeholder="Writte your comment"]')
    }

    get postComment() {
        return cy.get('.btn-primary').contains('Submit')
    }

    get deleteComment() {
        return cy.get('button.mb-3').contains("Delete")
    }


    create(diaryTitle) {
        this.title.type(diaryTitle)
        this.professor.select("60")
        this.submit.click()
    }

    search(title){
        this.searchField.type(title)
        this.searchBtn.click()
        cy.wait(1000)
        this.selectDiary.click()
    }









}

export default DiaryPage;

export const diaryPage = new DiaryPage;