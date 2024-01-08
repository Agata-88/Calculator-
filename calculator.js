// calculator.js

function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendToDisplay(value) {
    const displayElement = document.getElementById('display');
    const currentValue = displayElement.value;
  
    // Check if the new value is an operator
    const isNewValueOperator = ['+', '-', '*', '/'].includes(value);
  
    // Check if the last character is an operator
    const lastChar = currentValue.slice(-1);
    const isLastCharOperator = ['+', '-', '*', '/'].includes(lastChar);
  
    if (isNewValueOperator && isLastCharOperator) {
      // If both the last character and the new value are operators, replace the last operator
      displayElement.value = currentValue.slice(0, -1) + value;
    } else {
      // Otherwise, append the new value
      displayElement.value += value;
    }
  }
  
  
  function calculateResult() {
    try {
      const displayElement = document.getElementById('display');
      const inputValue = displayElement.value.trim();
  
      if (inputValue !== '') {
        const result = eval(inputValue);
  
        if (!isNaN(result)) {
          // Check if the result is a valid number
          if (result === Infinity) {
            // Handle division by 0
            displayElement.value = "Error: You can't devide by 0";
          } else {
            displayElement.value = result;
        } 
      } else {
          displayElement.value = 'Error: Invalid Calculation';
        }
      }
    } 
    catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  