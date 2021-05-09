/// <reference types="Cypress" />
 
describe('My SeventhTest Suite', function() {

    it('My SeventhTest case',function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Getting an attribute value using prop() jQuery method
        //Cypress method + non-cypress method = error -> So resolve the promise and then act upon it using jQuery methods
        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
            //Can't redirect from one domain (rahulshettyacademy.com) to another domain (qaacademy.com)
            //But can change the domain URL like rahulshettyacademy.com/selenium
            //hence use Test4.js 
        })
    })
})