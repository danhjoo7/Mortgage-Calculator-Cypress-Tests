# Mortgage-Calculator-Cypress-Tests
Cypress tests for the interest rate feature on Zillow's mortgage calculator 

## Running the tests

   Here are the steps to run the tests on the command line:
   
   1) Assuming you already have npm as your package manager and have installed cypress, navigate to your integration directory within your cypress directory

      `{User}/cypress/integration`
      
   2) Clone this repo within the integration directory with the command below 

      `git clone https://github.com/danhjoo7/Mortgage-Calculator-Cypress-Tests.git`
      
   3) Navigate to your root directory 
   4) Run the tests with this command 

      `npx cypress run --spec "cypress/integration/hometap/mortgage_calculator.spec.js"`
      
      Alternatively, if you want to use the Cypress test runner and actually see the tests run on the browser, you can open the test runner with `npx cypress open` and run the tests by clicking on the file 
      
      This should now start running the tests!
      
## Considerations for the future

One thing to consider moving forward is the type of selectors we use when writing tests. Currently, some elements are being selected through a mix of selectors; it would be
in our best interest to use id's since they are the most efficient of all the selectors. Using id's would speed up the process of grabbing elements and subsequently make the tests run faster; this is important as our tests scale. The implication of this would be that during development, id's would have be to created for html elements.





