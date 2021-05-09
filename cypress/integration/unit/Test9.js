/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'
describe('My EightTest Suite', function() {

    before(function() {
        cy.fixture('example').then(function(data){
            this.data = data;
        })
    })

    it('My EightTest case',function() {
        //Allocating memory and creating an object using new keyword
        const homepage = new HomePage();
        const productsPage = new ProductsPage();
        //url config is present in cypress.json
        cy.visit(Cypress.env('url')+ "angularpractice/")
        //can change URL through below command
        // cypress run URL
        //Getting name input field and typing Bob
        // cy.get('input[name="name"]:nth-child(2)').type(this.data.name)

        homepage.getNameField().type(this.data.name)
        homepage.getGenderValue().select(this.data.gender)
        // cy.get('select').select(this.data.gender)
        homepage.getTwoWayDataBindingField().should('have.value',this.data.name)
        homepage.getNameField().should('have.attr','minlength','2')
        // cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)
        // cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        //Command to pause the cypress test running
        // cy.pause()
        // cy.get('#inlineRadio3').should('be.disabled')
        homepage.getEntrprenaurRadioButton().should('be.disabled')
        //Redirect to Shop tab by clicking on it
        //debug() command is used to pause and helps is debugging
        // cy.get(':nth-child(2) > .nav-link').click().debug()
        // cy.get(':nth-child(2) > .nav-link').click()
        homepage.getShopTab().click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })

        productsPage.checkoutButton().click()
        var sum = 0;
        //Checking the total on checkout page
        //Fetching row(tr) column(td) 4th column(nth-child(4)) with strong element
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount  = $el.text()
            //triming & spliting because we have amount as $. 50000
            var res = amount.split(" ")
            res = res[1].trim()
            //below result is 0 because we trying to add to strings so we need to wrap with JS method -> Number(string)
            sum = Number(sum) + Number(res)   
        }).then(function() {
            //added cy.log() under THEN because it has to show the result only after it runs the loop completely hence we need to resolve the promise in order to make cypress run synchronously
            //also as the above logic is in JS which is asynchronous
            cy.log(sum)
        })
        //comparing the total with the total which is shown on the screen using Chai assertions
        //https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions
        cy.get('h3 strong').then(function(element){
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })



        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        //To apply cypress configuration for single test use the below syntax
        // Cypress.config("defaultCommandTimeout", 8000)
        //{force: true} is used as its not interactable element or the checkbox2 ID is covered by another element or has a parent element above it covering
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        //Assertion Error
        //Timed out retrying after 8000ms: expected '<div.alert.alert-success.alert-dismissible>' to have text '\n ×\n Success! Thank you! Your order will be delivered in next few weeks :-).\n', but the text was '\n          ×\n          Success! Thank you! Your order will be delivered in next few weeks :-).\n        '
        //Use includes as there are special characters or spaces
        // cy.get('.alert').should('have.text', '\n ×\n Success! Thank you! Your order will be delivered in next few weeks :-).\n')
        cy.get('.alert').then(function(ele){
            const actualText = ele.text()
            //using Chai assertion expect(attribute).to.be.true
            expect(actualText.includes('Success')).to.be.true
        })

    })
})
//Command to run specific test file, with url and HEADED mode (means show browser) (command prompt URL is taken on priority)
// node_modules/.bin/cypress run --spec cypress/integration/examples/Test1.js --env url=https://rahulshettyacademy.com 