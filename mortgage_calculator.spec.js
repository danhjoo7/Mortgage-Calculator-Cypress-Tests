/// <reference types="cypress" />

describe('mortgage calculator interest rate feature', () => {
    beforeEach(() => {
        cy.visit('https://www.zillow.com/mortgage-calculator/')
        cy.contains('Interest rate').should('be.visible')
    })

    it('changes the interest rate to 4% and increases the monthly payment amount', () => {
        
        const newInterestRate = '4'

        //erase the default interest rate and type the new one in
        cy.get('#rate').clear().type(`${newInterestRate}`)

        //comparing the old P&I to the new P&I after the interest rate has been changed
        cy.get('#breakdown-panel > div > div > div > svg > g > g:nth-child(1) > g > text.arc-label-value').then(value => {
            const defaultPrincipalInterest = value.text()

             //click outside the input box to implement the interest rate change; also, make sure the interest rate hasn't changed after clicking outside the box
            cy.get('#zmm-calc-payment > div.Flex-c11n-8-50-1__sc-n94bjd-0.biymia > div.Flex-c11n-8-50-1__sc-n94bjd-0.dRwhfE > div.StyledTabs-c11n-8-50-1__sc-mmagv-0.zgmi__sc-1tnoe56-0.ewpSYh').click()
            cy.get('#rate').should('have.value', newInterestRate)

            cy.get('#breakdown-panel > div > div > div > svg > g > g:nth-child(1) > g > text.arc-label-value').text().should('be.gt', defaultPrincipalInterest)
        })
    })

    // it('changes the loan program to 15 year fixed', () => {

    // })
    
    
    
    it('checks that an error message appears when entering an interest rate greater than 100%', () => {

        const newInterestRate = '101'

        //delete default value and enter new value
        cy.get('#rate').clear().type(`${newInterestRate}{enter}`)     
        cy.contains('Rate must be less than or equal to 100').should('be.visible')
    })

})