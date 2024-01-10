describe('subtraction test', () => {
    it('should correctly subtract two numbers', () => {
      cy.visit('../../index.html')
      
      const subtract = (numerator, denominator, expectedValue) => {
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
        cy.contains("button", "-").click();
        inputLargeNumber(denominator);
        cy.contains("button", "=").click();
        cy.get("input#display").should("have.value", expectedValue);
        cy.contains("button", "C").click();
        cy.get('input#display').should('have.value', '');
      };
    
      // Test cases
      
      const testCases= [
        // Testing positive integers
        {numerator: "6", denominator: "2", expectedValue: "4"},
        {numerator: "10", denominator: "5", expectedValue: "5"},
        {numerator: "150", denominator: "3", expectedValue: "147"},
        {numerator: "6000000", denominator: "4000000", expectedValue: "2000000"},
        {numerator: "6.123456", denominator: "4.123456", expectedValue: "2" },
        
        
   // Testing negative integers
      {numerator: "-6", denominator: "2", expectedValue: "-8"},
      {numerator: "-10", denominator: "5", expectedValue: "-15"},
      {numerator: "-150", denominator: "3", expectedValue: "-153"},
      {numerator: "-6000000", denominator: "400000", expectedValue: "-6400000"},
      {numerator: "-6.123456", denominator: "4.123456", expectedValue: "-10.246912"},

      ]
     
    testCases.forEach(({ numerator, denominator, expectedValue }) => {
        subtract(numerator, denominator, expectedValue);
      });
    });
})
  