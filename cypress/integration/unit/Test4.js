/// <reference types="Cypress" />
 
describe('My FourthTest Suite', function() {

    it('My FourthTest case',function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cypress auto accepts the alert or confirm pop-ups
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //To read the pop text, we have browser events window:alert
        //Triggering the browser events using on()
        cy.on('window:alert', (str) => {
            //Mocha assertion to compare string values
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) => {
            //Mocha assertion to compare string values
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        //Automate child tab by click from parent tab
        //removeAttr is a jQuery method called by invoke()
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        //Check whether navigated to new URL using substring method - include
        cy.url().should('include', 'rahulshettyacademy')
        //Browser navigation - back button
        cy.go('back')
    })
})


// Below is the document link for cypress events
// https://docs.cypress.io/api/events/catalog-of-events#Event-Types