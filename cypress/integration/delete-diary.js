import {loginPage} from "../page_object/login_page"
import {diaryPage} from "../page_object/diary"
import {USER} from "../fixtures/constants"

describe("Delete diary", () => {


    before(() =>{
        cy.visit('/')
        loginPage.loginButton.click()
        loginPage.login(USER.EMAIL,USER.PASSWORD)
        cy.wait(1000)
        diaryPage.home.click()
        cy.url().should('contain','/gradebooks')
    })

    it("Search diary",() => {
        diaryPage.diaryList.should('have.length','10');
        diaryPage.searchField.type('New Diary')
        diaryPage.searchBtn.click()
        diaryPage.diaryList.should('contain','New diary')
         
                
    })

    it.only("Delete diary",()=> {
        diaryPage.searchField.type('New Diary')
        diaryPage.searchBtn.click()
        diaryPage.selectDiary.click()
        diaryPage.deleteDiary.click()
    })
})