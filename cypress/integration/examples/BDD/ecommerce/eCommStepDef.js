/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductsPage from '../../../../support/pageObjects/ProductsPage'

const homepage = new HomePage();
const productsPage = new ProductsPage();
let name;
Given('I open ecommerce page', () => {
    cy.visit(Cypress.env('url')+"/angularpractice/")
})

When('I add items to cart', function() {
    homepage.getShopTab().click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })

        productsPage.checkoutButton().click()
})

And('Validate the total prices', () => {
    var sum = 0;
     
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const amount  = $el.text()
        var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)   
        }).then(function() {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element){
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })
})

Then('select the country submit and verify Thank you', () => {
    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        cy.get('.alert').then(function(ele){
            const actualText = ele.text()
            expect(actualText.includes('Success')).to.be.true
        })
})

When('I fill the form details', function(dataTable) {
    //Multi-dimensional Array
    //[[name, gender], [Ravi, male]]
    name = dataTable.rawTable[1][0];
    homepage.getNameField().type(dataTable.rawTable[1][0])
    homepage.getGenderValue().select(dataTable.rawTable[1][1])
})

Then('Validate the form behaviour', function() {
    homepage.getTwoWayDataBindingField().should('have.value',name)
    homepage.getNameField().should('have.attr','minlength','2')
    homepage.getEntrprenaurRadioButton().should('be.disabled')
})

And('select the shop page', () => {
    homepage.getShopTab().click()
})