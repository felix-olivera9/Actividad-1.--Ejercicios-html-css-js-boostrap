document.getElementById('btn-convertir').addEventListener('click', function() {
    const inputCelsius = document.getElementById('celsius').value.trim();
    const inputFahrenheit = document.getElementById('fahrenheit');
    const errorMsg = document.getElementById('error-msg');

    // 1. Validar que no este vacio y que sea un numero valido
    if (inputCelsius === "" || isNaN(inputCelsius)) {
        errorMsg.textContent = "⚠️ Por favor, ingresa un valor numérico válido.";
        inputFahrenheit.value = "";
        return;
    }

    // Limpiar mensaje de error si la validacion es correcta
    errorMsg.textContent = "";

    // 2. Convertir a numero decimal
    const c = parseFloat(inputCelsius);

    // 3. Aplicar formula: °F = (C * 9/5) + 32
    const f = (c * 9 / 5) + 32;

    // 4. Mostrar el resultado en la caja de texto readonly
    inputFahrenheit.value = f % 1 === 0 ? f + " °F" : f.toFixed(2) + " °F";
});