let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(char) {
    if (isOperator(char) && isOperator(currentInput.slice(-1))) {
        currentInput = currentInput.slice(0, -1);
    }
    currentInput += char;
    display.value = currentInput;
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}
function clearDigit() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    try {
        display.value = eval(currentInput);
        currentInput = display.value;
    } catch {
        display.value = 'Error';
    }
}
