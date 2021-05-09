/// <reference types="Cypress" />
 
describe('My ThirdTest Suite', function() {

    it('My ThirdTest case',function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Checking if checkbox is checked
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        //Unchecking the checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //Checking multiple checkboxes
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        //static dropdown
        cy.get('select').select('option2').should('have.value','option2')
        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        //parent-child chaining 
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === 'India'){
                $el.click()
            }
        })
        //validating the selected value matches
        cy.get('#autocomplete').should('have.value','India')

        //Handling hide/show or visible/invisible elements using assertions
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        
        //radio button
        cy.get('[value="radio2"]').check().should('be.checked')

    })
})