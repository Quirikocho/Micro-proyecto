
const todasLasPreguntas = [
    {
        id: 0,
        pregunta: "1. ¿Cual es el valor de π?",
        opciones: ["3,16", "2,41", "3,14", "0"],
        respuestaCorrecta: 2 // 3,14 es la opción 3 
    },
    {
        id: 1,
        pregunta: "2. ¿El MCD de 24 y 36 es:?",
        opciones: ["3", "16", "2", "12"],
        respuestaCorrecta: 3 // 12 es la opción 4 
    },
    {
        id: 2,
        pregunta: "3. Si y = 2x + 1 y x= 4 ¿Cuanto vale y?",
        opciones: ["9", "8", "10", "12"],
        respuestaCorrecta: 0 // 9 es la opción 1 
    },
    {
        id: 3,
        pregunta: "4. El volumen de un cubo de arista 3 cm es:",
        opciones: ["8 cm³", "125 cm³", "81 cm³", "27 cm³"],
        respuestaCorrecta: 3 // 27 cm³ es la opción 4 
    },
    {
        id: 4,
        pregunta: "5. ¿Qué expresión es equivalente a 3a - 6b?",
        opciones: ["3(a + 2b)", "3(a - 2b)", "6(a - b)", "3a(1 - 2b)"],
        respuestaCorrecta: 1 // 3(a - 2b) es la opción 2 
    },
    {
        id: 5,
        pregunta: "6. Cual es la derivada de f(x)= e^2x:",
        opciones: ["e^2x", "2e^2", "xe^2x", "2e^2x"],
        respuestaCorrecta: 3 // 2e^2x es la opción 4 
    },
    {
        id: 6,
        pregunta: "7. La mediana de estos números es: {2, 10, 32, 4, 16, 22, 50}",
        opciones: ["10", "16", "2", "32"],
        respuestaCorrecta: 1 // 16 es la opción 2 
    },
    {
        id: 7,
        pregunta: "8. La raiz cuadrada de 121:",
        opciones: ["7", "10", "11", "No es cuadrado perfecto"],
        respuestaCorrecta: 2 // 11 es la opción 3 
    },
    {
        id: 8,
        pregunta: "9. ¿Cuál es el menor número divisible por 2, 3 y 5?",
        opciones: ["15", "20", "25", "30"],
        respuestaCorrecta: 3 // 30 es la opción 4 
    },
    {
        id: 9,
        pregunta: "10. Un pastor tiene 15 ovejas y se les escapa 8 ¿Cuantas ovejas quedan?.",
        opciones: ["15", "6", "7", "8"],
        respuestaCorrecta: 3 // 8 es la opción 4 
    },
    {
        id: 10,
        pregunta: "11. ¿Cuál es el resultado de 100 / (2+3) x 2?",
        opciones: ["40", "50", "10", "30"],
        respuestaCorrecta: 0 // 40 es la opción 1 
    },
    {
        id: 11,
        pregunta: "12. ¿Qué número es el siguiente en la secuencia: 0, 1, 1, 2, 3, 5, ___?",
        opciones: ["9", "10", "11", "8"],
        respuestaCorrecta: 3 // 8 es la opción 4 
    },
    {
        id: 12,
        pregunta: "13. Un cuadrado tiene 4 esquinas. Si le corto 1 esquina, ¿cuántas esquinas le quedan?",
        opciones: ["5", "4", "3", "9"],
        respuestaCorrecta: 0 // 5 es la opción 1 
    },
    {
        id: 13,
        pregunta: "14. Si 3 lápices cuestan $6, ¿cuánto cuestan 5 lápices?",
        opciones: ["10", "20", "9", "12"],
        respuestaCorrecta: 0 // 10 es la opción 1 
    },
    {
        id: 14,
        pregunta: "15. Si en un triangulo rectángulo se divide seno/coseno, ¿qué obtienes?",
        opciones: ["Cotangente", "ArcoCoseno", "Tangente", "Secante"],
        respuestaCorrecta: 2 // Tangente es la opción 3 
    },
    {
        id: 15,
        pregunta: "16. ¿Cuánto es la mitad de 2+2?",
        opciones: ["2", "0", "1", "8"],
        respuestaCorrecta: 0 // 2 es la opción 1 
    },
    {
        id: 16,
        pregunta: "17. ¿Cuál es el resultado de (x + 3)(x - 2)?",
        opciones: ["x^2 + 2x +6", "x^2 + x - 6", "x^2 - 5", "-x^2 + x+ 6"],
        respuestaCorrecta: 1 // x^2 + x - 6 
    },
    {
        id: 17,
        pregunta: "18. ¿Cuántos lados tiene un hexágono?",
        opciones: ["8", "3", "5", "6"],
        respuestaCorrecta: 3 // 6  
    },
    {
        id: 18,
        pregunta: "19. ¿Cuánto es el 0,5% de 200?",
        opciones: ["10", "1", "5", "2"],
        respuestaCorrecta: 1 // 1 
    },
    {
        id: 19,
        pregunta: "20. ¿Cuánto es 1/4 + 1/2?",
        opciones: ["3/4", "1", "2/6", "1/4"],
        respuestaCorrecta: 0 //
    }
];

// Variables globales
let preguntasSeleccionadas = [];
let opcion_elegida = [];
let cantidad_correctas = 0;
let segundos = 0;
let intervalo = null;
let estaActivo = false;
const TIEMPO_LIMITE = 300; // 5 minutos
const NUM_PREGUNTAS = 10;

// Elementos del DOM
const tiempoDisplay = document.querySelector('.tiempo');
const comenzarBtn = document.getElementById('comenzar');
const pausarBtn = document.getElementById('pausar');
const resetearBtn = document.getElementById('resetear');
const finalizarBtn = document.getElementById('Finalizar');
const container = document.querySelector('.container');
const btnVolver = document.getElementById('btn-volver');

// Elementos del formulario de acceso
const paginaInicio = document.getElementById('pagina-inicio');
const paginaQuiz = document.getElementById('pagina-quiz');
const btnRegistro = document.getElementById('btn-registro');
const btnLogin = document.getElementById('btn-login');
const nombreRegistro = document.getElementById('nombre-registro');
const emailRegistro = document.getElementById('email-registro');
const nombreLogin = document.getElementById('nombre-login');
const nombreUsuarioDisplay = document.getElementById('nombre-usuario');

// Base de datos simulada de usuarios
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

/* ========== FUNCIONES DE USUARIO ========== */

function registrarUsuario(nombre, email) {
    // Validar que no exista el usuario
    const existeUsuario = usuarios.some(user => user.nombre === nombre || user.email === email);
    
    if (existeUsuario) {
        alert('El nombre de usuario o correo electrónico ya está registrado');
        return false;
    }
    
    // Crear nuevo usuario
    const nuevoUsuario = {
        nombre,
        email,
        puntajes: []
    };
    
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return true;
}

function iniciarSesion(nombre) {
    const usuario = usuarios.find(user => user.nombre === nombre);
    
    if (!usuario) {
        alert('Usuario no encontrado');
        return false;
    }
    
    return usuario;
}

/* ========== FUNCIONES DEL QUIZ ========== */

function seleccionarPreguntasAleatorias() {
     // Mezcla las preguntas usando el algoritmo Fisher-Yates
    const shuffled = [...todasLasPreguntas].sort(() => 0.5 - Math.random());
    preguntasSeleccionadas = shuffled.slice(0, NUM_PREGUNTAS);
    opcion_elegida = new Array(NUM_PREGUNTAS).fill(-1); // -1 significa no respondida
}

function mostrarPreguntas() {
    container.innerHTML = '';
    
    preguntasSeleccionadas.forEach((pregunta, index) => {
        const section = document.createElement('section');
        section.innerHTML = `
            <h3 class="Preguntas">${pregunta.pregunta}</h3>
            ${pregunta.opciones.map((opcion, i) => `
                <label class="Opciones">
                    <input type="radio" value="${i}" name="p${index}" 
                        ${opcion_elegida[index] === i ? 'checked' : ''}
                        onclick="respuesta(${index}, ${i})">
                    ${opcion}
                </label>
            `).join('')}
        `;
        container.appendChild(section);
    });
}

function respuesta(pregunta_num, opcion_num) {
    // Guarda la opción seleccionada
    opcion_elegida[pregunta_num] = opcion_num;
}

function calcularPuntaje() {
    cantidad_correctas = 0;
    preguntasSeleccionadas.forEach((pregunta, index) => {
        if (opcion_elegida[index] === pregunta.respuestaCorrecta) {
            cantidad_correctas++;
        }
    });
    return {
        correctas: cantidad_correctas,
        total: NUM_PREGUNTAS,
        porcentaje: Math.round((cantidad_correctas / NUM_PREGUNTAS) * 100)
    };
}

// Modifica la función pausarTimer
function pausarTimer() {
    if (estaActivo) {
        // Pausar el timer
        clearInterval(intervalo);
        estaActivo = false;
        pausarBtn.textContent = "Reanudar"; // Cambia el texto del botón
        pausarBtn.style.backgroundColor = "#17a2b8"; // Cambia el color a azul
    } else {
        // Reanudar el timer
        comenzarTimer();
        pausarBtn.textContent = "Pausar"; // Restaura el texto original
        pausarBtn.style.backgroundColor = "#ffc107"; // Restaura el color amarillo
    }
}

function resetearTimer() {
    pausarTimer(); // Esto detendrá el timer si está activo
    
    // Reiniciar variables
    segundos = 0;
    estaActivo = false;
    
    // Actualizar display
    actualizarDisplay();
    tiempoDisplay.style.color = '#333';
    tiempoDisplay.style.fontWeight = 'normal';
    
    // Generar nuevas preguntas aleatorias
    seleccionarPreguntasAleatorias();
    mostrarPreguntas();
    
    // Restaurar estado del botón Pausar
    pausarBtn.textContent = "Pausar";
    pausarBtn.style.backgroundColor = "#ffc107";
    
    // Iniciar automáticamente el nuevo timer
    comenzarTimer();
}

function iniciarQuiz() {
    seleccionarPreguntasAleatorias();
    mostrarPreguntas();
    resetearTimer(); // Esto pondrá el timer a 0 y deshabilitará los botones adecuados
}

// Añade event listeners para los botones del temporizador
comenzarBtn.addEventListener('click', comenzarTimer);
pausarBtn.addEventListener('click', pausarTimer);
resetearBtn.addEventListener('click', resetearTimer);

finalizarBtn.addEventListener('click', () => {
    finalizarQuiz();
    pausarTimer();
});


/* ========== FUNCIONES DEL TEMPORIZADOR ========== */

function formatearTiempo(segundosTotales) {
    const horas = Math.floor(segundosTotales / 3600);
    const minutos = Math.floor((segundosTotales % 3600) / 60);
    const segundos = segundosTotales % 60;
    
    return [
        horas.toString().padStart(2, '0'),
        minutos.toString().padStart(2, '0'),
        segundos.toString().padStart(2, '0')
    ].join(':');
}

function actualizarDisplay() {
    tiempoDisplay.textContent = formatearTiempo(segundos);
    
    if (segundos >= TIEMPO_LIMITE) {
        pausarTimer();
        tiempoDisplay.style.color = 'red';
        tiempoDisplay.style.fontWeight = 'bold';
        finalizarQuiz();
    }
}

function comenzarTimer() {
    if (!estaActivo) {
        // Limpiar intervalo existente
        if (intervalo) {
            clearInterval(intervalo);
        }
        
        // Iniciar nuevo timer
        intervalo = setInterval(() => {
            segundos++;
            actualizarDisplay();
            
            if (segundos >= TIEMPO_LIMITE) {
                pausarTimer();
                tiempoDisplay.style.color = 'red';
                tiempoDisplay.style.fontWeight = 'bold';
                finalizarQuiz();
            }
        }, 1000);
        
        estaActivo = true;
        tiempoDisplay.style.color = '#333';
        tiempoDisplay.style.fontWeight = 'normal';
        
        // Asegurar que el botón de pausa muestre el estado correcto
        pausarBtn.textContent = "Pausar";
        pausarBtn.style.backgroundColor = "#ffc107";
    }
}

/* ========== FUNCIONES PRINCIPALES ========== */

function iniciarQuiz() {
    seleccionarPreguntasAleatorias();
    mostrarPreguntas();
    resetearTimer();
    
    // Forzar el inicio del timer
    estaActivo = false; // Asegurarnos que el estado sea consistente
    comenzarTimer();
    
    // Actualizar estado de los botones
    comenzarBtn.disabled = true;
    pausarBtn.disabled = false;
    resetearBtn.disabled = false;
}

function finalizarQuiz() {
    pausarTimer();
    
    const puntaje = calcularPuntaje();
    const tiempoFormateado = formatearTiempo(segundos);
    
    // Crear un modal con los resultados
    const resultadoHTML = `
        <div class="resultado-modal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 1000;">
            <div style="background: white; padding: 2rem; border-radius: 10px; text-align: center; max-width: 500px;">
                <h2>Resultados del Quiz</h2>
                <p>Respondiste <strong>${puntaje.correctas} de ${puntaje.total}</strong> preguntas correctamente</p>
                <p>Porcentaje de aciertos: <strong>${puntaje.porcentaje}%</strong></p>
                <p>Tiempo empleado: <strong>${tiempoFormateado}</strong></p>
                <button onclick="this.parentElement.parentElement.remove()" style="padding: 0.5rem 1rem; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">Aceptar</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', resultadoHTML);
}

// Función para cambiar entre páginas
function cambiarPagina(mostrarQuiz) {
    const paginaInicio = document.getElementById('pagina-inicio');
    const paginaQuiz = document.getElementById('pagina-quiz');
    
    if (mostrarQuiz) {
        paginaInicio.classList.remove('pagina-activa');
        paginaInicio.classList.add('pagina-oculta');
        paginaQuiz.classList.remove('pagina-oculta');
        paginaQuiz.classList.add('pagina-activa');
    } else {
        paginaQuiz.classList.remove('pagina-activa');
        paginaQuiz.classList.add('pagina-oculta');
        paginaInicio.classList.remove('pagina-oculta');
        paginaInicio.classList.add('pagina-activa');
    }
}

/* ========== EVENT LISTENERS ========== */

// Eventos del quiz
document.getElementById('btn-registro').addEventListener('click', () => {
    const nombre = document.getElementById('nombre-registro').value.trim();
    const email = document.getElementById('email-registro').value.trim();
    
    if (nombre && email) {
        if (registrarUsuario(nombre, email)) {
            document.getElementById('nombre-usuario').textContent = nombre;
            cambiarPagina(true);
            iniciarQuiz(); // Esto ahora iniciará automáticamente el timer
        }
    } else {
        alert('Por favor complete todos los campos');
    }
});

document.getElementById('btn-login').addEventListener('click', () => {
    const nombre = document.getElementById('nombre-login').value.trim();
    
    if (nombre) {
        const usuario = iniciarSesion(nombre);
        if (usuario) {
            document.getElementById('nombre-usuario').textContent = usuario.nombre;
            cambiarPagina(true);
            iniciarQuiz(); // Esto ahora iniciará automáticamente el timer
        }
    } else {
        alert('Por favor ingrese su nombre de usuario');
    }
});

btnVolver.addEventListener('click', () => {
    cambiarPagina(false);
    resetearTimer();
});

/* ========== SISTEMA DE PUNTUACIÓN ========== */

function guardarResultado(puntaje, tiempo) {
    const usuarioActual = document.getElementById('nombre-usuario').textContent;
    const fecha = new Date().toLocaleDateString();
    
    const nuevoResultado = {
        nombre: usuarioActual,
        puntaje: puntaje.porcentaje,
        tiempo: tiempo,
        fecha: fecha,
        tema: "Matemáticas"
    };
    
    // Obtener resultados existentes
    let resultados = JSON.parse(localStorage.getItem('resultadosQuiz')) || [];
    
    // Agregar nuevo resultado
    resultados.push(nuevoResultado);
    
    // Ordenar y guardar solo los top 5
    resultados.sort((a, b) => b.puntaje - a.puntaje || a.tiempo.localeCompare(b.tiempo));
    const topResultados = resultados.slice(0, 5);
    
    localStorage.setItem('resultadosQuiz', JSON.stringify(topResultados));
    
    // Actualizar tabla de líderes
    actualizarTablaLideres();
}

function actualizarTablaLideres() {
    const resultados = JSON.parse(localStorage.getItem('resultadosQuiz')) || [];
    const tablaBody = document.getElementById('tabla-puntuaciones');
    
    tablaBody.innerHTML = '';
    
    resultados.forEach((resultado, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${resultado.nombre}</td>
            <td>${resultado.puntaje}%</td>
            <td>${resultado.tiempo}</td>
            <td>${resultado.fecha}</td>
        `;
        tablaBody.appendChild(fila);
    });
}

// Modifica finalizarQuiz para incluir guardarResultado
function finalizarQuiz() {
    pausarTimer();
    
    const puntaje = calcularPuntaje();
    const tiempoFormateado = formatearTiempo(segundos);
    
    // Guardar resultado
    guardarResultado(puntaje, tiempoFormateado);
    
    // Mostrar modal con resultados
    const resultadoHTML = `
        <div class="resultado-modal">
            <div class="resultado-contenido">
                <h2>Resultados del Quiz</h2>
                <p>Respondiste <strong>${puntaje.correctas} de ${puntaje.total}</strong> preguntas correctamente</p>
                <p>Porcentaje de aciertos: <strong>${puntaje.porcentaje}%</strong></p>
                <p>Tiempo empleado: <strong>${tiempoFormateado}</strong></p>
                <button onclick="this.parentElement.parentElement.remove()">Aceptar</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', resultadoHTML);
}

// Llama a actualizarTablaLideres cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    actualizarTablaLideres();
});

// Actualiza la tabla al volver al inicio
btnVolver.addEventListener('click', () => {
    cambiarPagina(false);
    resetearTimer();
    actualizarTablaLideres();
});
// Inicialización
actualizarDisplay();