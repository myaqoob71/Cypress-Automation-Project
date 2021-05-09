/// <reference types="Cypress" />
 
describe('My SixthTest Suite', function() {

    it('My SixthTest case',function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Show mouseover dropdown and click 
        //Use immediate child of a parent element
        cy.get('div .mouse-hover-content').invoke('show')
        //click on invisible element using {force: true} inside click()
        // cy.contains('Top').click({force: true})
        //click on Top value of dropdown
        cy.contains('Top').click()
        //check if URL contains "top"
        cy.url().should('include','top')
    })
})