describe('Addition test', () => {
  it('should add two numbers', () => {
    cy.visit('http://localhost:3000');
    
    const add = (firstNumber, secondNumber, expectedValue) => {
         // Helper function to input a large number using buttons
        const inputLargeNumber = (largeNumber) => {
        // Split the large number into individual digits
        const digits = largeNumber.split('');
        // Click the buttons for each digit
        digits.forEach(digit => {
          cy.contains("button", digit).click();
        });
      }

      // Testing function allows to test both negative and positive 
      // integers, including large numbers and floats
      inputLargeNumber(firstNumber);
      cy.contains("button", "+").click();
      inputLargeNumber(secondNumber);
      cy.contains("button", "=").click();
      cy.get('[data-cy="result"]').should("have.value", expectedValue);
      cy.contains("button", "C").click();
      cy.get('[data-cy="result"]').should('have.value', '');
      };

      // Test cases
  const testCases= [
      // Testing addition of 2 numbers
      {firstNumber: "6", secondNumber: "2", expectedValue: "8"},
      {firstNumber:"5.45", secondNumber: "10.67", expectedValue: "16.12"},
      {firstNumber: "153", secondNumber: "0", expectedValue: "153"},
      {firstNumber: "-14", secondNumber: "3", expectedValue: "-11"},       
      {firstNumber: "20", secondNumber: "-5", expectedValue: "15"},
      {firstNumber: "1.5", secondNumber: "3", expectedValue: "4.5"}
      
    ];

    // Iterate through test cases and execute 'addition' function
    testCases.forEach(({ firstNumber, secondNumber, expectedValue }) => {
      add(firstNumber, secondNumber, expectedValue);
    });
  });
})