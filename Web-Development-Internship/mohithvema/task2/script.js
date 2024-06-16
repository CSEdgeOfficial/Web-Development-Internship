let result = '';
let operation = null;
let operand = '';

function appendNumber(number) {
    if (operation !== null) {
        operand += number;
    } else {
        result += number;
    }
    updateResult();
}

function performOperation(op) {
    if (operation !== null) calculateResult();
    operation = op;
    updateResult();
}

function calculateResult() {
    if (operation !== null) {
        switch(operation) {
            case '+':
                result = parseFloat(result) + parseFloat(operand);
                break;
            case '-':
                result = parseFloat(result) - parseFloat(operand);
                break;
            case '*':
                result = parseFloat(result) * parseFloat(operand);
                break;
            case '/':
                result = parseFloat(result) / parseFloat(operand);
                break;
        }
        operation = null;
        operand = '';
    }
    updateResult();
}

function clearResult() {
    result = '';
    operation = null;
    operand = '';
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = result + (operation !== null ? ' ' + operation + ' ' + operand : '');
}