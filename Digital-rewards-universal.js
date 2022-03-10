/// <reference types="cypress" />
it('universal-3tl',function(){
    // url of website
    cy.visit('https://universal.3tlstaging.com/login')
    
    cy.viewport(1920, 1080) 
    
    // username or email
    cy.get('#mat-input-0').type('rupali.goyal@knoldus.com')
    
    // password
    cy.get('#mat-input-1').type('Rgoyal@123')
    
    //login button
    cy.get('.login-button').click()
    
    // rewards button
    cy.get('.mobile-container > :nth-child(3) > .ng-star-inserted').click()
    cy.get('.mat-select-value').click()

    // for digital rewards
    cy.get('#mat-option-7 > .mat-option-text').click()

    //Gosford Parknp
    cy.get(':nth-child(1) > .mat-card-actions > .ng-star-inserted > .btn').click()
    cy.get('.col > .btn').click()

    cy.get('.breadcrumb > :nth-child(1) > a').click()
  

   cy.get('.mat-select-value').click()
    cy.get('#mat-option-15 > .mat-option-text').click()
    
    // Endless Love (2014)
    cy.get(':nth-child(2) > .mat-card-actions > .ng-star-inserted > .btn').click()
    cy.get('.earn-preview-heading').should('contain','Endless Love (2014)')

    cy.get('.col > .btn').click()





    
   
});