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
      
 
    })
})