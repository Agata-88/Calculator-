describe('Calculator test using cypress', () => {
    it('Visits page with the calculator and perform tests on elements ', () => {
        cy.visit('../../index.html');
    });

    // Getting our index.html (caluculator) file from the local FileSystem.
    beforeEach(function () {
      cy.visit('../../index.html');
    });

    it('should divide two numbers', function () {
      cy.contains("button", "8").click();
      cy.contains("button", "/").click();
      cy.contains("button", "2").click();
      cy.contains("button", "=").click();
      cy.get('input#display').should('have.value', '4')
    });

    it('should add two numbers', function () {
      cy.contains("button", "7").click();
      cy.contains("button", "+").click();
      cy.contains("button", "2").click();
      cy.contains("button", "=").click();
      cy.get('input#display').should('have.value', '9')
    });

    it('should substract two numbers', function () {
      cy.contains("button", "9").click();
      cy.contains("button", "-").click();
      cy.contains("button", "8").click();
      cy.contains("button", "=").click();
      cy.get('input#display').should('have.value', '1')
    });

    it('should multiply two numbers', function () {
      cy.contains("button", "6").click();
      cy.contains("button", "*").click();
      cy.contains("button", "3").click();
      cy.contains("button", "=").click();
      cy.get('input#display').should('have.value', '18')
    });

    afterEach(function () {
      cy.contains("button", "C").click()
    });
});