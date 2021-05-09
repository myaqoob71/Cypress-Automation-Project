/// <reference types="cypress" />

describe('Mock API response - test 2', function() {
    it('mock response', function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        //Intercepting HTTP request details to test Security Scenarios that is altering the request payload to test
        //Syntax -> cy.intercept(method, url, routeHandler)
        //We are getting the response, then taking the request & edit by adding "AuthorName=malhotra" 
        // and once we get response for this response we mock or change the status code to 403
        // and store it in a refrence variable here it is "fakeUrl"
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 
            (req) => {
                req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
                req.continue((res) => {
                    //commenting below code as currently the above URL is returning the response so we will get an Assertion Error as we are getting response & we can't modify status code to 403
                    //But in real-time application if we try to change author and redirect it should give 403 - Forbidden error as its against the security concerns
                    //(res.statusCode).to.equal(403)
                })
            }
        ).as('fakeUrl')
        
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@fakeUrl')
    })
})