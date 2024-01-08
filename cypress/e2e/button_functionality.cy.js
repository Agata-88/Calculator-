describe('Calculator test using cypress', () => {
  it('Visits page with the calculator and perform tests on elements ', () => {
    cy.visit('../../index.html');
    
    // Query for the element which should contain buttons with numbers from 1 to 10
    // as well as operational buttons.
    // Visibility of each button output once clicked is checked 
    // Value displayed is checked against value of the button pressed.
    // Display is cleared using "C" button after each individual button test.
    cy.contains("button", "C").should("be.visible").click();
    cy.get('input#display').should('have.value', '');
    
    cy.contains("button", "1").should("be.visible").click();
    cy.get('input#display').should('have.value', '1');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');
    
    cy.contains("button", "2").should("be.visible").click();
    cy.get('input#display').should('have.value', '2');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "3").should("be.visible").click();
    cy.get('input#display').should('have.value', '3');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "4").should("be.visible").click();
    cy.get('input#display').should('have.value', '4');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "5").should("be.visible").click();
    cy.get('input#display').should('have.value', '5');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "6").should("be.visible").click();
    cy.get('input#display').should('have.value', '6');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "7").should("be.visible").click();
    cy.get('input#display').should('have.value', '7');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "8").should("be.visible").click();
    cy.get('input#display').should('have.value', '8');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "9").should("be.visible").click();
    cy.get('input#display').should('have.value', '9');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "0").should("be.visible").click();
    cy.get('input#display').should('have.value', '0');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "+").should("be.visible").click();
    cy.get('input#display').should('have.value', '+');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "-").should("be.visible").click();
    cy.get('input#display').should('have.value', '-');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "*").should("be.visible").click();
    cy.get('input#display').should('have.value', '*');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "/").should("be.visible").click();
    cy.get('input#display').should('have.value', '/');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "=").should("be.visible").click();
    cy.get('input#display').should('have.value', '');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');
    });
});