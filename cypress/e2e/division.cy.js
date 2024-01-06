describe('Division test', () => {
  it('should correctly divide two numbers', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    // Testing positive integers. 
    // Display is cleared after each calculation
    cy.contains("button", "6").click();
    cy.contains('button', '/').click();
    cy.contains("button", "2").click();
    cy.contains('button', '=').click();
    cy.get('input#display').should('have.value', '3');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "4").click();
    cy.contains("button", "8").click();
    cy.contains('button', '/').click();
    cy.contains("button", "1").click();
    cy.contains("button", "2").click();
    cy.contains('button', '=').click();
    cy.get('input#display').should('have.value', '4');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    // Testing division by 0 and if "error" is correctly displayed
    cy.contains("button", "7").click();
    cy.contains('button', '/').click();
    cy.contains("button", "0").click();
    cy.contains('button', '=').click();
    cy.get('input#display').should('have.value', "Error: You can't devide by 0");
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    // Testing negative itegers
    cy.contains("button", "-").click();
    cy.contains("button", "6").click();
    cy.contains('button', '/').click();
    cy.contains("button", "-").click();
    cy.contains("button", "2").click();
    cy.contains('button', '=').click();
    cy.get('input#display').should('have.value', '3');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "-").click();
    cy.contains("button", "6").click();
    cy.contains("button", "6").click();
    cy.contains('button', '/').click();
    cy.contains("button", "-").click();
    cy.contains("button", "1").click();
    cy.contains("button", "2").click();
    cy.contains('button', '=').click();
    cy.get('input#display').should('have.value', '5.5');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    // Testing dividing positive integers by negative itegers
    cy.contains("button", "6").click();
    cy.contains('button', '/').click();
    cy.contains("button", "-").click();
    cy.contains("button", "2").click();
    cy.contains('button', '=').click();
    cy.get('input#display').should('have.value', '-3');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    cy.contains("button", "6").click();
    cy.contains("button", "6").click();
    cy.contains('button', '/').click();
    cy.contains("button", "-").click();
    cy.contains("button", "1").click();
    cy.contains("button", "2").click();
    cy.contains('button', '=').click();
    cy.get('input#display').should('have.value', '-5.5');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

    // Testing dividing negative integers by positive itegers
    cy.contains("button", "-").click();
    cy.contains("button", "6").click();
    cy.contains('button', '/').click();
    cy.contains("button", "2").click();
    cy.contains('button', '=').click();
    cy.get('input#display').should('have.value', '-3');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');
    
    cy.contains("button", "-").click();
    cy.contains("button", "6").click();
    cy.contains("button", "6").click();
    cy.contains('button', '/').click();
    cy.contains("button", "1").click();
    cy.contains("button", "2").click();
    cy.contains('button', '=').click();
    cy.get('input#display').should('have.value', '-5.5');
    cy.contains("button", "C").click();
    cy.get('input#display').should('have.value', '');

  })
})