// Array con todas las preguntas (formato mejorado)
const todasLasPreguntas = [
    {
        id: 0,
        pregunta: "1. ¿Cual es el valor de π?",
        opciones: ["3,16", "2,41", "3,14", "0"],
        respuestaCorrecta: 2 // 3,14 es la opción 3 (índice 2)
    },
    {
        id: 1,
        pregunta: "2. ¿El MCD de 24 y 36 es:?",
        opciones: ["3", "16", "2", "12"],
        respuestaCorrecta: 3 // 12 es la opción 4 (índice 3)
    },
    {
        id: 2,
        pregunta: "3. Si y = 2x + 1 y x= 4 ¿Cuanto vale y?",
        opciones: ["9", "8", "10", "12"],
        respuestaCorrecta: 0 // 9 es la opción 1 (índice 0)
    },
    {
        id: 3,
        pregunta: "4. El volumen de un cubo de arista 3 cm es:",
        opciones: ["8 cm³", "125 cm³", "81 cm³", "27 cm³"],
        respuestaCorrecta: 3 // 27 cm³ es la opción 4 (índice 3)
    },
    {
        id: 4,
        pregunta: "5. ¿Qué expresión es equivalente a 3a - 6b?",
        opciones: ["3(a + 2b)", "3(a - 2b)", "6(a - b)", "3a(1 - 2b)"],
        respuestaCorrecta: 1 // 3(a - 2b) es la opción 2 (índice 1)
    },
    {
        id: 5,
        pregunta: "6. Cual es la derivada de f(x)= e^2x:",
        opciones: ["e^2x", "2e^2", "xe^2x", "2e^2x"],
        respuestaCorrecta: 3 // 2e^2x es la opción 4 (índice 3)
    },
    {
        id: 6,
        pregunta: "7. La mediana de estos números es: {2, 10, 32, 4, 16, 22}",
        opciones: ["10", "16", "2", "32"],
        respuestaCorrecta: 1 // 16 es la opción 2 (índice 1)
    },
    {
        id: 7,
        pregunta: "8. La raiz cuadrada de 121:",
        opciones: ["7", "10", "11", "No es cuadrado perfecto"],
        respuestaCorrecta: 2 // 11 es la opción 3 (índice 2)
    },
    {
        id: 8,
        pregunta: "9. ¿Cuál es el menor número divisible por 2, 3 y 5?",
        opciones: ["15", "20", "25", "30"],
        respuestaCorrecta: 3 // 30 es la opción 4 (índice 3)
    },
    {
        id: 9,
        pregunta: "10. Un pastor tiene 15 ovejas y se les escapa 8.",
        opciones: ["15", "6", "7", "8"],
        respuestaCorrecta: 3 // 8 es la opción 4 (índice 3)
    },
    {
        id: 10,
        pregunta: "11. ¿Cuál es el resultado de 100 / (2+3) x 2?",
        opciones: ["40", "50", "10", "30"],
        respuestaCorrecta: 0 // 40 es la opción 1 (índice 0)
    },
    {
        id: 11,
        pregunta: "12. ¿Qué número es el siguiente en la secuencia: 0, 1, 1, 2, 3, 5, ___?",
        opciones: ["9", "10", "11", "8"],
        respuestaCorrecta: 3 // 8 es la opción 4 (índice 3)
    },
    {
        id: 12,
        pregunta: "13. Un cuadrado tiene 4 esquinas. Si le corto 1 esquina, ¿cuántas esquinas le quedan?",
        opciones: ["5", "4", "3", "9"],
        respuestaCorrecta: 0 // 5 es la opción 1 (índice 0)
    },
    {
        id: 13,
        pregunta: "14. Si 3 lápices cuestan $6, ¿cuánto cuestan 5 lápices?",
        opciones: ["10", "20", "9", "12"],
        respuestaCorrecta: 0 // 10 es la opción 1 (índice 0)
    },
    {
        id: 14,
        pregunta: "15. Si en un triangulo rectángulo se divide seno/coseno, ¿qué obtienes?",
        opciones: ["Cotangente", "ArcoCoseno", "Tangente", "Secante"],
        respuestaCorrecta: 2 // Tangente es la opción 3 (índice 2)
    },
    {
        id: 15,
        pregunta: "16. ¿Cuánto es la mitad de 2+2?",
        opciones: ["2", "0", "1", "8"],
        respuestaCorrecta: 0 // 2 es la opción 1 (índice 0)
    },
    {
        id: 16,
        pregunta: "17. ¿Cuál es el resultado de (x + 3)(x - 2)?",
        opciones: ["x^2 + 2x +6", "x^2 + x + 6", "x^2 - 5", "-x^2 + x+ 6"],
        respuestaCorrecta: 1 // x^2 + x - 6 (opción 2, índice 1)
    },
    {
        id: 17,
        pregunta: "18. ¿Cuántos lados tiene un hexágono?",
        opciones: ["8", "3", "5", "6"],
        respuestaCorrecta: 3 // 6 es la opción 4 (índice 3)
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
const comenzarBtn = document.querySelector('.comenzarbtn');
const pausarBtn = document.querySelector('.pausarbtn');
const resetearBtn = document.querySelector('.resetearbtn');
const finalizarBtn = document.querySelector('.Finalizar');
const container = document.querySelector('.container');

/* ========== FUNCIONES DEL QUIZ ========== */

function seleccionarPreguntasAleatorias() {
    // Mezcla las preguntas usando el algoritmo Fisher-Yates
    const shuffled = [...todasLasPreguntas].sort(() => 0.5 - Math.random());
    preguntasSeleccionadas = shuffled.slice(0, NUM_PREGUNTAS);
    opcion_elegida = new Array(NUM_PREGUNTAS).fill(-1);
}

function mostrarPreguntas() {
    container.innerHTML = '';
    
    preguntasSeleccionadas.forEach((pregunta, index) => {
        const section = document.createElement('section');
        section.innerHTML = `
            <h3 class="Preguntas">${pregunta.pregunta}</h3>
            ${pregunta.opciones.map((opcion, i) => `
                <label class="Opciones">
                    <input type="radio" value="${i}" name="p${index}" onclick="respuesta(${index}, this)">
                    ${opcion}
                </label>
            `).join('')}
        `;
        container.appendChild(section);
    });
}

function respuesta(pregunta_num, seleccionada) {
    // Desmarcar todas las opciones de la pregunta actual
    const section = seleccionada.closest('section');
    const labels = section.querySelectorAll('.Opciones');
    
    labels.forEach(label => {
        label.style.backgroundColor = "white";
    });
    
    // Marcar la opción seleccionada
    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
    
    // Guardar la elección
    opcion_elegida[pregunta_num] = parseInt(seleccionada.value);
}

function calcularPuntaje() {
    cantidad_correctas = 0;
    preguntasSeleccionadas.forEach((pregunta, index) => {
        if (opcion_elegida[index] === pregunta.respuestaCorrecta) {
            cantidad_correctas++;
        }
    });
    return cantidad_correctas;
}

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
        tiempoDisplay.style.color = '#333';
        tiempoDisplay.style.fontWeight = 'normal';
        
        intervalo = setInterval(() => {
            segundos++;
            actualizarDisplay();
        }, 1000);
        estaActivo = true;
    }
}

function pausarTimer() {
    clearInterval(intervalo);
    estaActivo = false;
}

function resetearTimer() {
    pausarTimer();
    segundos = 0;
    tiempoDisplay.style.color = '#333';
    tiempoDisplay.style.fontWeight = 'normal';
    actualizarDisplay();
}

/* ========== FUNCIONES PRINCIPALES ========== */

function iniciarQuiz() {
    seleccionarPreguntasAleatorias();
    mostrarPreguntas();
    resetearTimer();
    comenzarTimer();
}

function finalizarQuiz() {
    pausarTimer();
    const puntaje = calcularPuntaje();
    const tiempo = formatearTiempo(segundos);
    
    alert(`¡Quiz completado!\n\nPuntaje: ${puntaje}/${NUM_PREGUNTAS}\nTiempo: ${tiempo}`);
}

/* ========== EVENT LISTENERS ========== */

comenzarBtn.addEventListener('click', iniciarQuiz);
pausarBtn.addEventListener('click', pausarTimer);
resetearBtn.addEventListener('click', resetearTimer);
finalizarBtn.addEventListener('click', finalizarQuiz);

// Inicialización
actualizarDisplay();