describe('My FirstTest Suite using Mocha', function() {
    it('My FirstTest case', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // cy.get('.product').should('have.length',4)
        cy.get('.product:visible').should('have.length',4)
        //Parent child chaining
        cy.get('.products').find('.product').should('have.length',4)
        //Get 3rd product and click on Add To Cart button
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function() {
            console.log('Testing...')
        })
        //Iterating over an array of web elements using Each
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const VegName = $el.find('h4.product-name').text()
            if(VegName.includes('Cashews')){
                $el.find('button').click()
                // OR
                // $el.contains('ADD TO CART').click()
            }
        })
        //This will throw error as we cannot store it in a variable else we need to handle promise manually
        const logo = cy.get('.brand')
        cy.log(logo.text())

        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART');


        //Manually handling promise
        //The below code prints log on test runner
        cy.get('.brand').then(function(logoelement){

            cy.log(logoelement.text())
        })
        //Aliasing -> Instead of writing cy.get('.products') or locators everytime
        cy.get('.products').as('productLocator')
        cy.get('@productLocator')
        //Difference between console.log() and cy.log()
        console.log() // Prints on the developer console - Non cypress command
        cy.log() //Prints on cypress test runner


    })
})