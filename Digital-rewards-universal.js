/// <reference types="cypress" />
it('universal-3tl',function(){
    // url of website
    cy.visit('https://universal.3tlstaging.com/login')
    
    cy.viewport(1920, 1080) 
    
    function login(){

        // username or email
    cy.get('#mat-input-0').type('rupali.goyal@knoldus.com')
    
    // password
    cy.get('#mat-input-1').type('Rgoyal@123')
    
    //login button
    cy.get('.login-button').click()
    
    }
    login();

    function rewards()
    {
        // rewards button
        cy.get('.mobile-container > :nth-child(3) > .ng-star-inserted').click()
        cy.get('.mat-select-value').click()
    }
    rewards();

    function digital(){
        // for digital rewards
        cy.get('#mat-option-7 > .mat-option-text').click()
    }
    digital();

    function digitalrewards()
    {
        // for gosford park
        cy.get(':nth-child(1) > .mat-card-actions > .ng-star-inserted > .btn').click()
        cy.get('.col > .btn').click()
       // assertion
        cy.get('.earn-preview-heading').should('contain','Gosford Park')
        

    }
    digitalrewards();
    function pointhistory()
    {
        cy.visit('https://universal.3tlstaging.com/manage-account/point-history')
        // assertion
        cy.get(':nth-child(3) > .cdk-column-description').should('contain',"You redeemed points for 'Gosford Park'")
    }
pointhistory();
    
    
    
});
