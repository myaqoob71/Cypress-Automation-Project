before(function() {
    cy.fixture('example').then(function(data){
        this.data = data;
    })
})