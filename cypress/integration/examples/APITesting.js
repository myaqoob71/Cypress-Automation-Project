/// <reference types="cypress" />

describe('Mock API response', function() {
    it('mock response', function(){

        cy.request('POST', 'https://216.10.245.166/Library/Addbook.php',{
            "name":"JS development",
            "isbn":"bcd",
            "aisle":"135",
            "author":"charles"
        }).then(function(response){
            expect(response.body).to.have.property("Msg", "successfully added")
            //Read through about different assertions
            //http://docs.cypress.io/api/commands/request.html#Timeouts
            expect(response.status).to.eq(200)
        })
    })
})