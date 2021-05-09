class HomePage {
    getNameField(){
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getTwoWayDataBindingField(){
        return cy.get('input[name="name"]:nth-child(1)')
    }
    getGenderValue(){
        return cy.get('select')
    }
    getEntrprenaurRadioButton(){
        return cy.get('#inlineRadio3')
    }
    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage;