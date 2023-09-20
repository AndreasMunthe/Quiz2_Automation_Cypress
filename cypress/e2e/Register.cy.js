describe('Register Scenario', () => {
  beforeEach(() => {
    //cy.visit('demowebshop.tricentis.com')
    cy.visit(Cypress.env('demowebshop_url'))  
    })

  it('Register Succes', () => {
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

  it('Failed Register | Empty all field', () => {
    cy.get('.ico-register').click()
    cy.get('#register-button').click()
    cy.get(':nth-child(2) > .form-fields > :nth-child(2) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(3) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(4) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(1) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error').should('be.visible')
  })

  it('Failed Register | Only choose radio button', () => {
    cy.get('.ico-register').click()
    cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click()
    cy.get('#register-button').click()
    cy.get(':nth-child(2) > .form-fields > :nth-child(2) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(3) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(4) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(1) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error').should('be.visible')
  })

  it('Failed Register | fill radio button, firstname', () => {
    cy.get('.ico-register').click()
    cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click()
    cy.get('#FirstName').type('Test')
    cy.get('#register-button').click()
    cy.get(':nth-child(3) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(4) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(1) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error').should('be.visible')
  })

  it('Failed Register | fill radio button, firstname, lastname', () => {
    cy.get('.ico-register').click()
    cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click()
    cy.get('#FirstName').type('Test')
    cy.get('#LastName').type('Dummy')
    cy.get('#register-button').click()
    
    cy.get(':nth-child(4) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(1) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error').should('be.visible')
  })

  it('Failed Register | fill radio button, firstname, lastname, email', () => {
    cy.get('.ico-register').click()
    cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click()
    cy.get('#FirstName').type('Test')
    cy.get('#LastName').type('Dummy')
    cy.get('#Email').type('TestDummy99@gmail.com')
    cy.get('#register-button').click()
    cy.get(':nth-child(1) > .field-validation-error').should('be.visible')
    cy.get(':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error').should('be.visible')
  })

  it('Failed Register | fill radio button, firstname, lastname, email, password ', () => {
    cy.get('.ico-register').click()
    cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click()
    cy.get('#FirstName').type('Test')
    cy.get('#LastName').type('Dummy')
    cy.get('#Email').type('TestDummy99@gmail.com')
    cy.get('#Password').type('Testing12')
    cy.get('#register-button').click()
    cy.get(':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error').should('be.visible')
  })

  it('Failed Register | email already exists ', () => {
    cy.get('.ico-register').click()
    cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click()
    cy.get('#FirstName').type('Test')
    cy.get('#LastName').type('Dummy')
    cy.get('#Email').type('TestDummy99@gmail.com')
    cy.get('#Password').type('Testing12')
    cy.get('#ConfirmPassword').type('Testing12')
    cy.get('#register-button').click()
    cy.get('.validation-summary-errors > ul > li').should('be.visible')
  })
})