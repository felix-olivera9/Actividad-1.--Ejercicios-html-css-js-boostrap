document.getElementById('btn-convertir').addEventListener('click', function() {
    const inputPesos = document.getElementById('pesos').value.trim();
    const inputDolares = document.getElementById('dolares');
    const errorMsg = document.getElementById('error-msg');

    /*que no esté vacío, que sea numérico y que sea mayor a 0 */
    if (inputPesos === "" || isNaN(inputPesos) || parseFloat(inputPesos) < 0) {
        errorMsg.textContent = "Por favor, ingresa un valor numérico válido y positivo.";
        inputDolares.value = "";
        return;
    }

    /* Limpiar mensaje de error */
    errorMsg.textContent = "";

    
    const mxn = parseFloat(inputPesos);

    
    const tasaDeCambio = 0.055;

    
    const usd = mxn * tasaDeCambio;

    /*Asigna el valor y lo fija en 2 decimales */
    inputDolares.value = usd.toFixed(2) + " USD";
});