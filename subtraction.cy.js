describe('subtraction test', () => {
    it('should correctly subtract two numbers', () => {
      cy.visit('../../index.html')
      
      const subtract = (firstnumber, secondnumber, expectedValue) => {
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
        inputLargeNumber(firstnumber);
        cy.contains("button", "-").click();
        inputLargeNumber(secondnumber);
        cy.contains("button", "=").click();
        cy.get("input#display").should("have.value", expectedValue);
        cy.contains("button", "C").click();
        cy.get('input#display').should('have.value', '');
      };
    
      // Test cases
      
      const testCases= [
        // Testing positive integers
        {firstnumber: "6", secondnumber: "2", expectedValue: "4"},
        {firstnumber: "10", secondnumber: "5", expectedValue: "5"},
        {firstnumber: "150", secondnumber: "3", expectedValue: "147"},
        {firstnumber: "6000000", secondnumber: "4000000", expectedValue: "2000000"},
        {firstnumber: "6.123456", secondnumber: "4.123456", expectedValue: "2" },
        
        
   // Testing negative integers
      {firstnumber: "-6", secondnumber: "2", expectedValue: "-8"},
      {firstnumber: "-10", secondnumber: "5", expectedValue: "-15"},
      {firstnumber: "-150", secondnumber: "3", expectedValue: "-153"},
      {firstnumber: "-6000000", secondnumber: "400000", expectedValue: "-6400000"},
      {firstnumber: "-6.123456", secondnumber: "4.123456", expectedValue: "-10.246912"},

      ]
     
    testCases.forEach(({ firstnumber, secondnumber, expectedValue }) => {
        subtract(firstnumber, secondnumber, expectedValue);
      });
    });
})
  