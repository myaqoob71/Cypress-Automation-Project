# Cypress-Automation-Project
Cypress

Creating, saving, restoring and clearing a local Storage
https://blog.liplex.de/keep-local-storage-in-cypress/


Cypress is asynchronous as JS is when used with Ajax calls asynchronous JavaScript (such as callbacks, promises, and async/await)
Node JS is asynchronous (through event loops)
Every asynchronous step returns a promise which has resolve, pending and  reject

Cypress can manipulate the DOM - This is the very important difference from other testing frameworks

Using cypress we cannot automate the child tab when clicked by the parent tab unlike protractor, selenium but we can resolve using jQuery

Cypress doesn’t support mouse over functionality but we can resolve using jQuery

Cypress can handle DOM elements which are in invisible using {force: true} inside click()

Main purpose of cypress is Non-flaky automation

Cypress cannot handle child tab and child window

Cypress doesn’t support cross domain

What is Cypress?
· Cypress is a next generation front end Automation testing tool built for the modern web applications

How Cypress is Unique from other Automation tools?
Cypress automatically waits for commands and assertions before moving on. No more async hell.
Ability to test Edge Test cases by Mocking the server response
Cypress takes snapshots as your tests run. We can hover over each commands in the Command Log to see exactly what happened at each step.
Because of its Architectural design, Cypress delivers fast, consistent and reliable test execution compared to other Automation tools
View videos of your entire tests execution when run from the Cypress Dashboard.
*******************************************************************************************
Cypress built on Node.js and comes packaged as an npm module,
As it is built on Node.js, It uses JavaScript for writing tests. But 90% of coding can be done using Cypress inbuilt commands which are easy to understand.
Cypress also bundles with jQuery and inherits many of jQuery methods for UI components Identification

Cypress Architecture
Most testing tools (like Selenium) operate by running outside of the browser and executing remote commands across the network. But Cypress engine directly operates inside the browser. In other words, It is the browser that is executing your test code
This enables Cypress to listen and modify the browser behavior at run time by manipulating DOM and altering Network requests and responses on the fly
Cypress open doors to New Kind of testing with Having ultimate control over your application (front and back)
 
Cypress Browser Support:
 Chrome Electron Firefox & IE (Under Construction)

Important feature of Cypress is we can time travel through the logs to debug any issues  
Cypress Components:
Test Runner Dash Board Service
 
Course Outcome:
By end of this course, You should be able to Automate any Web App using Cypress You will understand how Cypress is Unique to build Non Flaky Stable Automation tests with the help of jQuery You can mock network requests and responses with Cypress Ability to Design Cypress framework from scratch with all the Testing standards
Integrate Cypress Test Framework to Jenkins for CI/CD  
Course Prerequisites:  None for 90% of lectures. Basics of API knowledge when dealing with API mocking topics. (10% lectures) JavaScript Basics are taught in parallel when required with Cypress concepts



￼

command to launch test runner
Opens test runner (that is in browser) ->   node_modules/.bin/cypress open

Runs test case using command line
Runs all test spec files -> node_modules/.bin/cypress run
(The above command runs all test cases in a HEADLESS mode that means it doesn’t open browser)

node_modules/.bin/cypress run  —headed
(runs all test cases in a HEAD mode that means it opens Electron browser which is default browser for cypress)

To change browser
node_modules/.bin/cypress run  —browser chrome

To run particular test
node_modules/.bin/cypress run —spec cypress/integration/examples/Test1.js  —env url=https://rahulshettyacademy.com —headed


Understanding the cypress directory structure
Fixtures folder -> used to store the test data in the form of JSON, XML
Integration folder ->  used to store test files
Plugins folder ->  used write listeners or events example when browser finishes test execution close or installing some plugin to browser during test execution
Support folder  -> command.js is used to write or store reusable functions which is utilised by all test cases
Videos folder has test execution video stored
Cypress.json -> used to override cypress configurations which are present in test runner browser under settings tab

Cypress recommended framework -> Mocha
To navigate to a page -> cy.visit()

Cypress does not support IE browser

defaultCommandTimeout time in milliseconds -> 4000

We need to build a locator in order to identify the HTML elements
Cypress supports CSS selectors only

CSS selectors can be written by below ways
id selector can be written as -> #idname -> tagname#idname
Class selector can be written as -> .classname
Any attribute selector can be written as -> [attribute = value]  -> tagname[attribute = value]   eg-> input[type=‘search’]

tagname is optional

If you have multiple elements with same classname then to identify uniquely we can write as -> tagname.classname

To traverse from parent to child -> we do traverse through tagname Eg-> form is a parent html element and input is a child html element -> form input


In XPath -> form/input

Chropath is plugin for Chrome which is helpful for getting CSS Selectors and XPaths

Using Cypress test runner we can get the required CSS Selectors by just hovering on the DOM just click open playground button on cypress test runner

To get Intelisense code completion on VSCode write the below line of code in the first line of test file

/// <reference types=“Cypress” />

cy.visit() -> used to check/hit  the website URL
cy.get() -> used to get the DOM element
.type -> method used to check what is typed inside the text field
cy.wait() -> used to make the cypress test runner wait until the search results are shown
:visible -> used to retrieve only visible elements


Q&A
Which locator cypress support to find the web element? -> CSS Selectors 
What is the syntax to pass the string? -> cy.get(‘locator’).type(‘String’)
What is the Syntax to filter the invisible locator? -> cy.get(‘locator:visible’)
Assertions are used from Chai library
How find(‘locator’) method will work in cypress? -> It will search and filter based on cy.get(‘locator’)
Which the behavioral assertion below?  -> Should(‘be.checked’)
What is the syntax to compare to string?  -> expect(‘str1’).to.equal(‘str2’)
Which function help us to use of JQuery?  -> invoke()
Which JQuery method allows you to get ‘href’? -> .prop()
What is the syntax to import iframe? -> import ‘cypress-iframe’
‘this’ keyword scope ? -> Entire block
Where we have to place custom commands in the project structure?  -> cypress/support/command.js
How will you debug your scripts?  -> Using cy.debug() & cy.pause()
Adding explicit wait in your spec file? -> It will be applicable only after the wait specified line
What are all the parameters required in command line run to record the tests in dashboard?  ->  Cypress run -record  -key
What is the run command for chrome browser execution?
Cypress run -browser chrome
Cypress run -b chrome
Cypress run -b chrome -headed
XHR stands for XMLHttpRequest
XHR methods transfer data between Web browser and web server


Assertions like
- .should(‘have.length’, some number) -> assertion method used to check length of string
- 

Parent-child chaining
find - method used to get descendant DOM elements of a specific selector



Internally cypress takes care of the promises,  that means whenever user types in 
cy.visit(‘https://google.com') to load page it takes time so cypress adds .then() method internally and waits until response is provided, then moves to next step
So whenever we manipulate the cypress promise flow it breaks
Eg: const logo = cy.get(‘.brand’)
cy.log(logo.text()) // This throws error telling that logo is not a function

So to fix above issue we need to manually handle promise
cy.get(‘.brand’).then(function(logoelement){

	cy.log(logoelement.text())
})


text() -> This is not the cypress command
Ex: cy.get(‘.brand’).text() //Will not work as text() is a jQuery method
If we resolve it using .then() method then we can use text()

check() - Used for checkboxes
should(‘be.checked’) -> Mocha assertion used with ‘be’  because we are checking the behaviour 
Assertion used with ‘have’ when we are dealing with properties like name, value, id, class
If we want to use twice should() assertion then we can use add() 
uncheck() - used to check if checkboxes are unchecked
select() - used for dropdown

Cypress auto handles alert and confirm pops by clicking on OK button

on() - method used to trigger any event
expect() - Mocha assertion used to compare
invoke() - method used to handle jQuery methods
removeAttr - jQuery method to remove attributes 
go() - cypress method to navigate in the browser
url() - cypress method used to get current URL of the page

To get the 2nd column data from the a static HTML table using ChroPath chrome extension -> tr td:nth-child(2)
next() - cypress method to get immediately following sibling of each DOM element

￼


describe('Hooks', () => {
  before(() => {
    // runs once before all tests in the block
  })

  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
  })

  after(() => {
    // runs once after all tests in the block
  })
})

Refer Cypress document for hooks: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks
https://www.toolsqa.com/cypress/cypress-hooks/

To connect your Cypress project to Cypress Dashboard
Go to cypress browser test runner -> Click on Runs tabs  -> Will see a Login to Cypress Dashboard button -> Click we get 2 sign-in options (Sign-in through GitHub / Sign-in through Google / Single-Sign On)
Once selected appropriate Sign-in option we need to setup a project by clicking on a button
Once Setup a new project is clicked -> Project Id is created which automatically gets added to cypress.json file
Also there will be a command to run like
Cypress run —record —key <some-lengthy-key>

node_modules/.bin/cypress run —record —key <some-lengthy-key>

NPM module
Mochawesome - helps us to create HTML Test reports (reporting tool)
npm install mochawesome —save -dev
npm install mocha 5.2.0 (have issues with higher version hence install this version)

Documentation for Cypress mochawesome setup
https://docs.cypress.io/guides/tooling/reporters.html#npm-Reporters
 In Cypress.json add { 	“reporter”: “mochawesome”
}

To run mochawesome using command line for specific test file cypress run — reporter mochawesome —spec cypress\integration\example\Test.js

If we don’t want to use Cypress dashboard as its chargeable  -> use mochawesome (No screenshots & No recording videos) To run multiple spec file separate it by using commas after each spec file
Cypress test retires - present in recent features add runMode attribute -> inside cypress.json {
	“retires”: { 		“runMode”: 1 	}
} 

In command line log it shows Tests as 1 But we can find out by checking command line logs Screenshots as 2 
Integrate Jenkins CI with Cypress 1. Download Jenkins -> https://jenkins.io/download/ -> Generic Java package (.war)
2. In terminal or command prompt goto to installed directory path start Jenkins by using command -> java -jar jenkins.war -httpPort=9090
3. In browser tab -> localhost:9090/login?from=%2F
4. Create user & password & login
5. Create a new Job by clicking on -> New Item link
6. Then enter an Item name 
7. Select -> Freestyle project
8. This creates a base project setup page
9. For real time project -> get the project path from Git repository under -> Source Code Management -> Check Git -> Repository URL
10. For our local project under -> Source Code Management -> select None
11. In General tab -> Click Advanced button -> Use custom workspace -> Directory (Add project path) -> Display Name
12. Make Jenkin build parameterised -> General -> check This project is parameterised -> Add parameter -> Select Choice Parameter -> Enter Name (Script) -> Enter Choices (All script names like test, headTest, chromeTest etc from project package.json -> Click Save button
13. On left navigation -> Click Build with parameters link(we can select different Choices from dropdown) -> Click Build button
14. On left navigation -> Click Configure link -> Under Build Environment tab -> Click Add build step button -> Select Execute Shell -> Enter Commands (npm run “$Script”) -> Click Save button
15. Now On left navigation -> Click Build with parameters link(we can select different Choices from dropdown) -> Click Build button it automatically generates reports -> We can see reports on Cypress Dashboard or Mochawesome


Integrate Cucumber BDD in Cypress
Using Cucumber, Tests can be described in this behavioural driven style by write steps in plain English -> This syntax is called the Gherkin Syntax
Feature attribute -> represents Test Suite
Scenario attribute -> represents each test case
BDD -> Behaviour Driven Development 
BDD Framework -> Cucumber 
We need to Create a Step Definition file 
https://github.com/cucumber/cucumber.js
Under Support files -> Step Definition



Setup and Install Cucumber Cypress Preprocessor plugin into our project
http://github.com/TheBrainFamily/cypress-cucumber-preprocessor

npm install —save -dev cypress-cucumber-preprocessor

To help cypress recognise the cucumber syntax’s we need to configure in plugins folder index.js file
This below command will start whenever project is started

const cucumber  = require(‘cypress-cucumber-preprocessor’).default module.exports = (on, config) => {
	on(‘file:preprocessor’, cucumber())
}

To run cucumber files which are with .feature extension below cypress configuration is needed
cypress.json {
	“testFiles”: ”**/*.feature”
}

If cypress needs to find step definition below configuration is required
“cypress-cucumber-preprocessor”: {
	“nonGlobalStepDefinitions” : true
}

Install a Visual Studio Code extension for Cucumber (Gherkin) - for writing step definitions

The .feature file will use steps definitions from a directory with the same name as your .feature file 
For example, if ecommerce.feature is the step definition file name then the tests folder should have same name as feature file that is -> ecommerce 

BDD hooks are of Mocha (like are before, beforeEach) supported by cucumber 

Cucumber doesn’t support arrow functions which are coming Mocha framework
For example,  before(function() {
    cy.fixture('example').then(function(data){
        this.data = data;
    })
})

//Use function() {} instead of () => {}
When('I add items to cart', function() {
    homepage.getShopTab().click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })

        productsPage.checkoutButton().click()
})

Command to run cucumber feature file 
./node_modules/.bin/cypress-tags run -e GLOB='cypress/integration/**/*.feature'

Testing on browser
./node_modules/.bin/cypress-tags run -e GLOB='cypress/integration/**/*.feature' --headed --browser chrome

Instead of relying on the fixtures for data
Data driven testing using cucumber data table feature for Cypress Tests


Using Cucumber DataTable  -> Those with pipeline operator
Scenario: Filling the form to shop
    Given I open ecommerce page
    When I fill the form details
        |name |gender |
        |Ravi |Male |
    Then Validate the form behaviour
    And select the shop page

We will pass dataTable as argument to the method
Then we will convert dataTable to array 
By using rawTable method to convert dataTable to multi dimensional array -> dataTable.rawTable

When('I fill the form details', function(dataTable) {
    //Multi-dimensional Array
    //[[name, gender], [Ravi, male]]
    name = dataTable.rawTable[1][0];
    homepage.getNameField().type(dataTable.rawTable[1][0])
    homepage.getGenderValue().select(dataTable.rawTable[1][1])
})

Tagging Implementation to control test execution for cucumber scenarios in feature file
@Regression
    Scenario: Ecommerce products delivery
    Given I open ecommerce page
    When I add items to cart
    And Validate the total prices
    Then select the country submit and verify Thank you


Command to run only particular tag -> npx is helpful to avoid writing ./node_modules/.bin => as it automatically finds where cypress is located
npx cypress-tags run -e TAGS="@Regression" --headed --browser chrome

Building a Cucumber HTML reports for Cypress Cucumber test sceanrios
http://github.com/TheBrainFamily/cypress-cucumber-preprocessor Goto Output header under which there is a configuration as “cypress-cucumber-preprocessor” at this to package.json

"cypress-cucumber-preprocessor": {
    "cucumberJson": {
      "generate": true,
      "outputFolder": "cypress/cucumber-json",
      "filePrefix": "",
      "fileSuffix": ".cucumber"
    }
  }

The above configuration when added to package.json and cypress tests are ran using the below command (which runs all spec files)
	./node_modules/.bin/cypress-tags run -e GLOB='cypress/integration/**/*.feature'
-> It creates a cucumber-json folder with name as -> ecommerce.cucumber.json (this file consists of test results in the form of JSON)

Now as the JSON is created we have to go ahead and create HTML reports using another npm plugin https://github.com/wswebcreation/multiple-cucumber-html-reporter

Command -> npm install multiple-cucumber-html-reporter —save-dev
Now there is a JS file (provided in the above GitHub link) which goes and reads the cucumber.json and generates the HTML reports
Now after adding the provided JS change the required paths inside the JS file
After making required changes to the JS file run the JS file  using the command -> node cucumber-html-report.js (filename can be anything)
The above command will create a index.html file so now you can open the html file in browser

The below method makes Cypress unique 
Cypress Intercept
Intercept method - manages the behaviour of HTTP requests
Modify real HTTP responses, changing the body headers, or HTTP status code before they are received by the browser
Modify an HTTP request’s body, headers & URL before it is sent to the  destination server
Helps us to perform Integration Testing between UI and Backend services
https://docs.cypress.io/api/commands/intercept#Comparison-to-cy-route

https://docs.cypress.io/api/commands/intercept#Request-object-properties

https://docs.cypress.io/api/commands/intercept#Response-object-properties

Automation security tests

If we want to test PURE HTTP calls without involving UI & also trigger the API calls which we were not doing (previously we were not calling the API)

https://docs.cypress.io/api/commands/request.html#Syntax

Use of request command
cy.request(url)
cy.request(url, body)
cy.request(method, url)
cy.request(method, url, body)
cy.request(options)


Cypress Database (SQL Server) Integration
1. Setup Cloud SQL Server through Azure Portal
2. Create tables in DB
3. Install Cypress SQL Server Plugin
4. Configure Connection Properties and call SQL Queries through Test
5. Feed the values into Browser Applications from DB Tables in Cypress Tests

Cypress NPM plugin
npmjs.com/package/cypress-sql-server


Reach me for cypress resume inputs
mentor@rahulshettyacademy.com

https://www.linkedin.com/in/rahul-shetty-trainer/

