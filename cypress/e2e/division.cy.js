describe('Division test', () => {
  it('should correctly divide two numbers', () => {
    cy.visit('../../index.html')
    
    const divide = (numerator, denominator, expectedValue) => {
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
      // integers, including large numbers
      inputLargeNumber(numerator);
      cy.contains("button", "/").click();
      inputLargeNumber(denominator);
      cy.contains("button", "=").click();
      cy.get("input#display").should("have.value", expectedValue);
      cy.contains("button", "C").click();
      cy.get('input#display').should('have.value', '');
    };
  
    // Test cases
    const testCases= [
      // Testing positive integers, including very large numbers and floats
      {numerator: "6", denominator: "2", expectedValue: "3"},
      {numerator: "10", denominator: "5", expectedValue: "2"},
      {numerator: "150", denominator: "3", expectedValue: "50"},
      {numerator: "1.5", denominator: "3", expectedValue: "0.5"},
      {numerator: "15045698.215478", denominator: "15.9658", expectedValue: "942370.4553156121"},
      {numerator: "1500000000000000", denominator: "399999999999999", expectedValue: "3.7500000000000093"},
      {numerator: "15597562143664", denominator: "3996579132645", expectedValue: "3.9027282148023636"},

      // Testing negative integers, including large numbers and floats
      {numerator: "-6", denominator: "-2", expectedValue: "3"},
      {numerator: "-10", denominator: "-5", expectedValue: "2"},
      {numerator: "-150", denominator: "-3", expectedValue: "50"},
      {numerator: "-1.5", denominator: "-3", expectedValue: "0.5"},
      {numerator: "-15045698.215478", denominator: "-15.9658", expectedValue: "942370.4553156121"},
      {numerator: "-1500000000000000", denominator: "-399999999999999", expectedValue: "3.7500000000000093"},
      {numerator: "-15597562143664", denominator: "-3996579132645", expectedValue: "3.9027282148023636"},

      // Testing dividing negative integers by positive integers, including large numbers and floats
      {numerator: "-6", denominator: "2", expectedValue: "-3"},
      {numerator: "-10", denominator: "5", expectedValue: "-2"},
      {numerator: "-150", denominator: "3", expectedValue: "-50"},
      {numerator: "-1.5", denominator: "3", expectedValue: "-0.5"},
      {numerator: "-15045698.215478", denominator: "15.9658", expectedValue: "-942370.4553156121"},
      {numerator: "-1500000000000000", denominator: "399999999999999", expectedValue: "-3.7500000000000093"},
      {numerator: "-15597562143664", denominator: "3996579132645", expectedValue: "-3.9027282148023636"},

      // Testing dividing positive integers by negative integers, including large numbers and floats
      {numerator: "6", denominator: "-2", expectedValue: "-3"},
      {numerator: "10", denominator: "-5", expectedValue: "-2"},
      {numerator: "150", denominator: "-3", expectedValue: "-50"},
      {numerator: "1.5", denominator: "-3", expectedValue: "-0.5"},
      {numerator: "15045698.215478", denominator: "-15.9658", expectedValue: "-942370.4553156121"},
      {numerator: "1500000000000000", denominator: "-399999999999999", expectedValue: "-3.7500000000000093"},
      {numerator: "15597562143664", denominator: "-3996579132645", expectedValue: "-3.9027282148023636"},
 
      // Testing dividing by 0 and error message display
      {numerator: "6", denominator: "0", expectedValue: "Error: You can't devide by 0"},
      {numerator: "10", denominator: "0", expectedValue: "Error: You can't devide by 0"},
      {numerator: "150", denominator: "0", expectedValue: "Error: You can't devide by 0"},
      {numerator: "1500000000000000", denominator: "0", expectedValue: "Error: You can't devide by 0"},
      {numerator: "15597562143664", denominator: "0", expectedValue: "Error: You can't devide by 0"},
    ];

    // Iterate through test cases and execute 'divide' function
    testCases.forEach(({ numerator, denominator, expectedValue }) => {
      divide(numerator, denominator, expectedValue);
    });
  });
})