function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let result = '';

    for (let i = 0; i < 7; i++) {
        const [symbol, value] = obj[i];
        const count = Math.floor(num / value);

        if (count === 4 && i > 0) {
            const prevSymbol = obj[i - 1][0];
            result += symbol + prevSymbol;
        } else {
            result += symbol.repeat(count);
        }

        num %= value;
    }

    return result;
}

// Get elements from the DOM
const numberInput = document.getElementById('numberInput');
const convertButton = document.getElementById('convertButton');
const resultElement = document.getElementById('result');

// Attach event listener to the button
convertButton.addEventListener('click', () => {
    const inputValue = parseInt(numberInput.value);
    
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 100000) {
        const romanNumeral = convertToRoman(inputValue);
        resultElement.textContent = `Roman Numeral: ${romanNumeral}`;
    } else {
        resultElement.textContent = 'Please enter a valid number between 0 and 100000.';
    }
});