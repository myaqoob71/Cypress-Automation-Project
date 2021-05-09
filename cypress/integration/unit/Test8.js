/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
 
describe('My EigthTest Suite', function() {

    it('My EigthTest case',function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //iFrame is embedded HTML in main HTML page
        // We need install a dependency for handling iframes called "cypress-iframe"
        //loading the iframe
        cy.frameLoaded('#courses-iframe')
        //switching to iframe & find the mentorship tab & clicking
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        //
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)

    })
})