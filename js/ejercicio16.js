/*Operaciones utilizando funciones flecha*/
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (tipo) => {
    const val1 = document.getElementById('numero1').value.trim();
    const val2 = document.getElementById('numero2').value.trim();
    const inputResultado = document.getElementById('resultado');

    if (val1 === "" || val2 === "" || isNaN(val1) || isNaN(val2)) {
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido',
            text: 'Por favor, ingresa números válidos en ambos campos de texto.',
            confirmButtonColor: '#3498db'
        });
        inputResultado.value = "";
        return;
    }

    const a = parseFloat(val1);
    const b = parseFloat(val2);
    let resultado = 0;

    switch (tipo) {
        case 'suma':
            resultado = sumar(a, b);
            break;
        case 'resta':
            resultado = restar(a, b);
            break;
        case 'multiplicar':
            resultado = multiplicar(a, b);
            break;
        case 'dividir':
            resultado = dividir(a, b);
            // Validar si ocurrió división por cero
            if (typeof resultado === 'string') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Operación no permitida',
                    text: resultado,
                    confirmButtonColor: '#3498db'
                });
                inputResultado.value = "";
                return;
            }
            break;
    }

    inputResultado.value = resultado;
};