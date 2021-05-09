/// <reference types="Cypress" />
 
describe('My FifthTest Suite', function() {

    it('My FifthTest case',function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //From static HTML table fetch 2nd column and price value of adjacent column name
        //2nd column CSS selector => tr td:nth-child(2)
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();
            if(text.includes("Python")){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})