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

    // get searchDiary(){
    //     return cy.get('.form-control')
    // }
    get searchField() {
        return cy.get('.form-control')
    }

    get searchBtn() {
        return cy.get('.mt-3').contains('Search')
    }

    get selectDiary() {
        return cy.get('[href="/single-gradebook/205"]').contains('New diary')
    }

    get deleteDiary() {
        return cy.get('.btn-danger').contains('Delete')
    }

    create(diaryTitle) {
        this.title.type(diaryTitle)
        this.professor.select("60")
        this.submit.click()
    }




}

export default DiaryPage;

export const diaryPage = new DiaryPage;