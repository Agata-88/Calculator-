describe('Multiplication test', () => {
    it('should correctly multiply two numbers', () => {
      cy.visit('../../index.html')
      
      const divide = (multiplicant, multiplier, expectedValue) => {
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
        inputLargeNumber(multiplicant);
        cy.contains("button", "*").click();
        inputLargeNumber(multiplier);
        cy.contains("button", "=").click();
        cy.get("input#display").should("have.value", expectedValue);
        cy.contains("button", "C").click();
        cy.get('input#display').should('have.value', '');
        };

        // Test cases
    const testCases= [
        // Testing positive integers, including very large numbers and floats
        {multiplicant: "6", multiplier: "2", expectedValue: "12"},
        {multiplicant:"10", multiplier: "5", expectedValue: "50"},
        {multiplicant: "150", multiplier: "3", expectedValue: "450"},
        {multiplicant: "1.5", multiplier: "3", expectedValue: "4.5"},
        {multiplicant: "15045698.215478", multiplier: "15.9658", expectedValue: "240216608.56867865"},
        {multiplicant: "1500000000000000", multiplier: "399999999999999", expectedValue: "5.999999999999985e+29"},
        {multiplicant: "15597562143664", multiplier: "3996579132645", expectedValue: "6.233689138350116e+25"},
  
        // Testing negative integers, including large numbers and floats
        {multiplicant: "-6", multiplier: "-2", expectedValue: "12"},
        {multiplicant: "-10", multiplier: "-5", expectedValue: "50"},
        {multiplicant: "-150", multiplier: "-3", expectedValue: "450"},
        {multiplicant: "-1.5", multiplier: "-3", expectedValue: "4.5"},
        {multiplicant: "-15045698.215478", multiplier: "-15.9658", expectedValue: "240216608.56867865"},
        {multiplicant: "-1500000000000000", multiplier: "-399999999999999", expectedValue: "5.999999999999985e+29"},
        {multiplicant: "-15597562143664", multiplier: "-3996579132645", expectedValue: "6.233689138350116e+25"},
  
        // Testing dividing negative integers by positive integers, including large numbers and floats
        {multiplicant: "-6", multiplier: "2", expectedValue: "-12"},
        {multiplicant: "-10", multiplier: "5", expectedValue: "-50"},
        {multiplicant: "-150", multiplier: "3", expectedValue: "-450"},
        {multiplicant: "-1.5", multiplier: "3", expectedValue: "-4.5"},
        {multiplicant: "-15045698.215478", multiplier: "15.9658", expectedValue: "-240216608.56867865"},
        {multiplicant: "-1500000000000000", multiplier: "399999999999999", expectedValue: "-5.999999999999985e+29"},
        {multiplicant: "-15597562143664", multiplier: "3996579132645", expectedValue: "-6.233689138350116e+25"},
  
        // Testing dividing positive integers by negative integers, including large numbers and floats
        {multiplicant: "6", multiplier: "-2", expectedValue: "-12"},
        {multiplicant: "10", multiplier: "-5", expectedValue: "-50"},
        {multiplicant: "150", multiplier: "-3", expectedValue: "-450"},
        {multiplicant: "1.5", multiplier: "-3", expectedValue: "-4.5"},
        {multiplicant: "15045698.215478", multiplier: "-15.9658", expectedValue: "-240216608.56867865"},
        {multiplicant: "1500000000000000", multiplier: "-399999999999999", expectedValue: "-5.999999999999985e+29"},
        {multiplicant: "15597562143664", multiplier: "-3996579132645", expectedValue: "-6.233689138350116e+25"},
   
        // Testing dividing by 0 and error message display
        {multiplicant: "6", multiplier: "0", expectedValue: "0"},
        {multiplicant: "10", multiplier: "0", expectedValue: "0"},
        {multiplicant: "150", multiplier: "0", expectedValue: "0"},
        {multiplicant: "1500000000000000", multiplier: "0", expectedValue: "0"},
        {multiplicant: "15597562143664", multiplier: "0", expectedValue: "0"},
      ];
  
      // Iterate through test cases and execute 'divide' function
      testCases.forEach(({ multiplicant, multiplier, expectedValue }) => {
        divide(multiplicant, multiplier, expectedValue);
      });
    });
  })