const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = this.value;

        // Clear display if "C" is pressed
        if (value === 'C') {
            currentInput = '';
            display.value = '';
            return;
        }

        // If "=" is pressed, evaluate the expression
        if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
            }
            return;
        }

        // Append value to currentInput and display it
        currentInput += value;
        display.value = currentInput;
    });
});
