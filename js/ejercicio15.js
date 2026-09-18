/* Arreglo global*/
let estudiantes = [];

/*Agregar Estudiante*/
document.getElementById('btn-agregar').addEventListener('click', function() {
    const inputNombre = document.getElementById('nombre').value.trim();
    const inputCalificacion = document.getElementById('calificacion').value.trim();
    const errorMsg = document.getElementById('error-msg');
    const listaHtml = document.getElementById('lista-estudiantes');

    if (inputNombre === "" || inputCalificacion === "") {
        errorMsg.textContent = "Por favor, completa ambos campos (nombre y calificación).";
        return;
    }

    if (isNaN(inputCalificacion)) {
        errorMsg.textContent = "La calificación debe ser un valor numérico válido.";
        return;
    }

    errorMsg.textContent = "";

    const nuevoEstudiante = {
        nombre: inputNombre,
        calificacion: parseFloat(inputCalificacion)
    };

    estudiantes.push(nuevoEstudiante);


    if (estudiantes.length === 1) {
        listaHtml.innerHTML = ""; 
    }

    const item = document.createElement('li');
    item.textContent = `${nuevoEstudiante.nombre} - Calificación: ${nuevoEstudiante.calificacion}`;
    listaHtml.appendChild(item);

    document.getElementById('nombre').value = "";
    document.getElementById('calificacion').value = "";
    document.getElementById('nombre').focus();
});

/*Calcular Resultados*/
document.getElementById('btn-calcular').addEventListener('click', function() {
    const errorMsg = document.getElementById('error-msg');
    const inputPromedio = document.getElementById('promedio');
    const inputMejor = document.getElementById('mejor-estudiante');
    const inputPeor = document.getElementById('peor-estudiante');

    if (estudiantes.length === 0) {
        errorMsg.textContent = "Agrega al menos un estudiante antes de calcular.";
        inputPromedio.value = "";
        inputMejor.value = "";
        inputPeor.value = "";
        return;
    }

    errorMsg.textContent = "";

    const sumaCalificaciones = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    const promedio = sumaCalificaciones / estudiantes.length;

    const calificaciones = estudiantes.map(e => e.calificacion);
    const calificacionMaxima = Math.max(...calificaciones);
    const calificacionMinima = Math.min(...calificaciones);

    const mejorEstudiante = estudiantes.find(e => e.calificacion === calificacionMaxima);
    const peorEstudiante = estudiantes.find(e => e.calificacion === calificacionMinima);

    inputPromedio.value = promedio % 1 === 0 ? promedio : promedio.toFixed(2);
    inputMejor.value = `${mejorEstudiante.nombre} `;
    inputPeor.value = `${peorEstudiante.nombre} `;
});