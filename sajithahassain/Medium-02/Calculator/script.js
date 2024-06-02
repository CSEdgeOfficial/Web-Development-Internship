let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
    currentInput += num;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput !== '') {
        if (['+', '-', '*', '/'].includes(currentInput[currentInput.length - 1])) {
            currentInput = currentInput.slice(0, -1);
        }
        currentInput += op;
        display.value = currentInput;
    }
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}
