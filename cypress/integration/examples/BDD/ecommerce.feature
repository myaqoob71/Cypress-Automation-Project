Feature: End to End ecommerce validation

    Application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open ecommerce page
    When I add items to cart
    And Validate the total prices
    Then select the country submit and verify Thank you

    @Smoke 
    Scenario: Filling the form to shop
    Given I open ecommerce page
    When I fill the form details
        |name |gender |
        |Ravi |Male |
    Then Validate the form behaviour
    And select the shop page