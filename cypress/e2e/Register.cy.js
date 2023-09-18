describe('Register Scenario', () => {
  beforeEach(() => {
    cy.visit('demowebshop.tricentis.com')  
    })

  it('Register ', () => {
    cy.get('.ico-register').click()
    cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click()
    cy.get('#FirstName').type('Test')
    cy.get('#LastName').type('Dummy')
    cy.get('#Email').type('TestDummy99@gmail.com')
    cy.get('#Password').type('Testing12')
    cy.get('#ConfirmPassword').type('Testing12')
    cy.get('#register-button').click()
    cy.get('h1').should('be.visible')
    cy.get('.page-body > .buttons > .button-1').click()
    
  })
})