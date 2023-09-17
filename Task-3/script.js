document.addEventListener('DOMContentLoaded', function () {
    const temperatureInput = document.getElementById('temperatureInput');
    const unitSelect = document.getElementById('unitSelect');
    const convertButton = document.getElementById('convertButton');
    const resultContainer = document.getElementById('resultContainer');
    const result = document.getElementById('result');

    convertButton.addEventListener('click', function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (!isNaN(temperature)) {
            if (unit === 'celsius') {
                const fahrenheit = (temperature * 9/5) + 32;
                result.textContent = `${temperature}°C is ${fahrenheit.toFixed(2)}°F`;
            } else {
                const celsius = (temperature - 32) * 5/9;
                result.textContent = `${temperature}°F is ${celsius.toFixed(2)}°C`;
            }
            resultContainer.style.display = 'block';
        } else {
            alert('Please enter a valid temperature.');
        }
    });
});
