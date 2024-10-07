// Obtener los elementos de la calculadora
const pantalla = document.querySelector('.resultados');
const teclas = document.querySelectorAll('.teclas');
const igualBtn = document.querySelector('.igual');
const clearBtn = document.querySelector('.clear');

// Agregar eventos de clic a los botones numéricos
teclas.forEach(tecla => {
  tecla.addEventListener('click', () => {
    pantalla.textContent += tecla.textContent;
  });
});

// Agregar evento de clic al botón de igual (=)
igualBtn.addEventListener('click', () => {
  evaluarExpresion();
});

// Agregar evento de clic al botón de borrar (C)
clearBtn.addEventListener('click', () => {
  pantalla.textContent = '';
});

// Agregar eventos de clic a los botones de operación
const operacionBtns = document.querySelectorAll('.signos');
operacionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const operacion = btn.textContent;
    pantalla.textContent += operacion;
  });
});

// Agregar evento de teclado
document.addEventListener('keydown', (event) => {
  const teclaPresionada = event.key;
  if (teclaPresionada === 'Enter') {
    evaluarExpresion();
  } else if (teclaPresionada === 'Escape') {
    pantalla.textContent = '';
  } else if (teclaPresionada.match(/[0-9+\-*/.]/)) {
    pantalla.textContent += teclaPresionada;
  }
});

// Función para evaluar la expresión matemática
function evaluarExpresion() {
  try {
    const expresion = pantalla.textContent;
    const resultado = eval(expresion);
    pantalla.textContent = resultado;
  } catch (error) {
    pantalla.textContent = 'Error';
  }
}
