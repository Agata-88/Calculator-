// calculator.js

function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendToDisplayNumber(value) {
    document.getElementById('display').value +=value;
  }

  function appendToDisplay(value) {
    var displayElement = document.getElementById('display');
    var currentValue = displayElement.value;

    // Check if the value is not already present to avoicd character duplication
    if (!currentValue.length === 0 || currentValue.slice(-1) !==value) {
      displayElement.value += value
    }
  }

  //function removeLastCharacter(value) {
 //   document.getElementById('display').value -=value;
 // }
  
  function calculateResult() {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  