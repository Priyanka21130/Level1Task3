function convertTemperature() {
    const temperature = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');

    if (!temperature || isNaN(temperature)) {
        resultElement.innerHTML = 'Please enter a valid number.';
        return;
    }

    let temp = parseFloat(temperature);
    let celsius, fahrenheit, kelvin;

    if (unit === 'celsius') {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    } else if (unit === 'fahrenheit') {
        fahrenheit = temp;
        celsius = (temp - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (unit === 'kelvin') {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    resultElement.innerHTML = `
        ${celsius.toFixed(2)} °C <br>
        ${fahrenheit.toFixed(2)} °F <br>
        ${kelvin.toFixed(2)} K
    `;
}
