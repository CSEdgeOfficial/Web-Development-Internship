const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let firstOperand = null;
let operator = null;
let awaitingNextInput = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (button.classList.contains('number')) {
            if (awaitingNextInput) {
                currentInput = buttonText;
                awaitingNextInput = false;
            } else {
                currentInput += buttonText;
            }
        } else if (button.classList.contains('operator')) {
            if (operator !== null) {
                compute();
            }
            firstOperand = parseFloat(currentInput);
            operator = buttonText;
            awaitingNextInput = true;
        } else if (button.classList.contains('equals')) {
            compute();
        } else if (button.classList.contains('clear')) {
            clear();
        } else if (button.classList.contains('decimal')) {
            if (!currentInput.includes('.')) {
                currentInput += '.';
            }
        } else if (button.classList.contains('percentage')) {
            currentInput = parseFloat(currentInput) / 100;
        }

        updateDisplay();
    });
});

function updateDisplay() {
    display.textContent = currentInput;
}

function clear() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    awaitingNextInput = false;
}

function compute() {
    const secondOperand = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    firstOperand = result;
    operator = null;
    awaitingNextInput = true;
}
