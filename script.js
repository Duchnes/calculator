let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(char) {
    if (
        (currentInput.length === 0 && (char !== '-' && !isDigit(char))) ||
        (currentInput.length > 0 && isOperator(char) && isOperator(currentInput[currentInput.length - 1])) ||
        (currentInput.length > 0 && isOperator(char) && currentInput[currentInput.length - 1] === '.') ||
        (currentInput.length > 0 && char === '=')
    ) {
        return;
    }

    if (currentInput.length < 50) {
        currentInput += char;
        display.textContent = currentInput;
    }
}

function isDigit(char) {
    return /\d/.test(char);
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function deleteLastChar() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function calculateResult() {
    if (currentInput.length > 0 && !isOperator(currentInput[currentInput.length - 1])) {
        try {
            currentInput = eval(currentInput).toString();
            display.textContent = currentInput;
        } catch (error) {
            display.textContent = 'Error';
        }
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
