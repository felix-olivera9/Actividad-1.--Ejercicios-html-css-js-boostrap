document.getElementById('btn-verificar').addEventListener('click', function() {
    const inputEdad = document.getElementById('edad').value.trim();
    const inputResultado = document.getElementById('resultado');
    const errorMsg = document.getElementById('error-msg');

    if (inputEdad === "" || isNaN(inputEdad) || parseInt(inputEdad) < 0) {
        errorMsg.textContent = "Por favor, ingresa una edad válida en números.";
        inputResultado.value = "";
        return;
    }

    errorMsg.textContent = "";
    
    const edad = parseInt(inputEdad);
    if (edad >= 18) {
        inputResultado.value = "Puedes votar 🐟";
    } else {
        inputResultado.value = "No puedes votar 😢";
    }
});