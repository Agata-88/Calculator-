// calculator.js

function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
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
  