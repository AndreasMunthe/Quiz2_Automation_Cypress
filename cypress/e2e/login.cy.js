describe('Login Scenario', () => {
  beforeEach(() => {
    //cy.visit('demowebshop.tricentis.com') 
    cy.visit(Cypress.env('demowebshop_url')) 
    })

    it('Succes Login', () => {
      cy.get('.ico-login').click()
      cy.get('[name="Email"]').type(Cypress.env('Email'))
      cy.get('[name="Password"]').type(Cypress.env('Password'))
      cy.get('.reversed').click()
      //cy.get('form > .buttons > .button-1').click()
      cy.klik('form > .buttons > .button-1')
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