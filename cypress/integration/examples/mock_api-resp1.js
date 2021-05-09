/// <reference types="cypress" />

describe('Mock API response', function() {
    it('mock response', function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
    
        //intercept method will not call API it watches whenever the below GET API is triggered it allows us to mock the API response
        //Syntax for intercept method -> cy.intercept({requestObject}, {responseObject})
        //as() is helpfull to store into a refrence variable here it is "bookretrieval"
        //Syntax -> cy.intercept(url, routeHandler)
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
            statusCode: 200,
            body: [{"book_name":"RestAssured with Java","isbn":"RSU","aisle":"2301"}]
        })
    }).as('bookretrieval')
    //Length of response array = rows of the table displayed
    //Virtual Library button class
    cy.get('button[class="btn btn-primary"]').click()
    //Below alias will resolve a promise
    cy.wait('@bookretrieval').should(({request, response}) => {
        //Below we are checking the table rows getting render. Here it is 2 tr as 1 is header and another is data tr
        cy.get('tr').should('have.length', response.body.length + 1)
    })
    cy.get('p').should('have.text', 'Sorry, we have only one book available');
})