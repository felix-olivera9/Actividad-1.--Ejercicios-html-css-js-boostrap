document.getElementById('btn-calcular').addEventListener('click', function() {
    const inputTexto = document.getElementById('numeros').value.trim();
    const inputMayor = document.getElementById('mayor');
    const inputMenor = document.getElementById('menor');
    const inputPromedio = document.getElementById('promedio');
    const errorMsg = document.getElementById('error-msg');

    if (inputTexto === "") {
        errorMsg.textContent = "Por favor, ingresa una serie de números separados por comas.";
        inputMayor.value = "";
        inputMenor.value = "";
        inputPromedio.value = "";
        return;
    }

    /* Separar la cadena usando split(",") y convertir a números con map(Number)*/
    const partes = inputTexto.split(",");
    const numeros = partes.map(num => Number(num.trim()));

    const esValido = numeros.every(num => !isNaN(num) && num !== "");

    if (!esValido) {
        errorMsg.textContent = "Error: Todos los valores deben ser números válidos separados por comas.";
        inputMayor.value = "";
        inputMenor.value = "";
        inputPromedio.value = "";
        return;
    }

    errorMsg.textContent = "";

    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);

    const suma = numeros.reduce((acc, valor) => acc + valor, 0);
    const promedio = suma / numeros.length;

    inputMayor.value = mayor;
    inputMenor.value = menor;
    inputPromedio.value = promedio;
});