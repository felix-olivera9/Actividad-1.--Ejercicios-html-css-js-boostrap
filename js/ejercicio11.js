document.getElementById('btn-convertir').addEventListener('click', function() {
    const inputKm = document.getElementById('kilometros').value.trim();
    const inputMillas = document.getElementById('millas');
    const errorMsg = document.getElementById('error-msg');

    // Validacion: verificar que no este vacio y que sea un numero valido
    if (inputKm === "" || isNaN(inputKm)) {
        errorMsg.textContent = "Por favor, ingresa un valor numerico valido.";
        inputMillas.value = "";
        return;
    }

    // Limpiar mensaje de error si todo es correcto
    errorMsg.textContent = "";

    // Convertir a numero
    const km = parseFloat(inputKm);

    // Formula de conversion: M = K * 0.621371
    const millas = km * 0.621371;

    // Mostrar el resultado en la caja de texto readonly
    inputMillas.value = millas;
});