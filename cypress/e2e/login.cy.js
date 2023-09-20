describe('Login Scenario', () => {
  beforeEach(() => {
    cy.visit('demowebshop.tricentis.com')  
    })

    it('Succes Login', () => {
      cy.get('.ico-login').click()
      cy.get('#Email').type('TestDummy99@gmail.com')
      cy.get('#Password').type('Testing12')
      cy.get('.reversed').click()
      cy.get('form > .buttons > .button-1').click()
      cy.get('.header-links > ul > :nth-child(1) > .account').should('be.visible')
    })

    it('Failed Login | Empty Email & Password', () => {
      cy.get('.ico-login').click()
      cy.get('#Email').type(' ')
      cy.get('#Password').type(' ')
      cy.get('.reversed').click()
      cy.get('form > .buttons > .button-1').click()
      cy.get('.validation-summary-errors').should('be.visible')
    })

    it('Failed Login | Empty Email', () => {
      cy.get('.ico-login').click()
      cy.get('#Email').type('TestDummy99@gmail.com')
      cy.get('#Password').type(' ')
      cy.get('.reversed').click()
      cy.get('form > .buttons > .button-1').click()
      cy.get('.validation-summary-errors').should('be.visible')
    })

    it('Failed Login | Empty Password', () => {
      cy.get('.ico-login').click()
      cy.get('#Email').type(' ')
      cy.get('#Password').type('Testing12')
      cy.get('.reversed').click()
      cy.get('form > .buttons > .button-1').click()
      cy.get('.validation-summary-errors').should('be.visible')
    })
})