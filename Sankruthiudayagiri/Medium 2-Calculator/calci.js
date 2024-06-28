let displayValue = '';

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue || '0';
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function appendCharacter(char) {
    if (char === '=') {
        try {
            displayValue = eval(displayValue).toString();
        } catch {
            displayValue = 'Error';
        }
    } else {
        displayValue += char;
    }
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', updateDisplay);
