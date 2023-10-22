// --- GENERAR CÓDIGO HTML CON JS ---

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nombre = document.querySelector('.nombre').value;
  const password = document.querySelector('.password').value;


  // Verificamos si ya existe una alerta en la página para que no se puedan agregar varias
  // Agregando a una nueva variable el elemento de la alerta (si es que existe) y la borramos
  const alertaPrevia = document.querySelector('.alerta');
  if (alertaPrevia) {
    alertaPrevia.remove();
  }

  // Creación de alerta
  const alerta = document.createElement('DIV');
  // Añadirle un id
  alerta.id = 'alerta';
  // Añadirle una clase
  alerta.classList.add('alerta', 'claseAlerta', 'claseAlerta2');
  // Quitarle una clase
  alerta.classList.remove('claseAlerta2');

  if (nombre === '' || password === '') {
    alerta.textContent = 'Debes rellenar todos los campos';
    alerta.classList.add('error');
  } else {
    alerta.textContent = 'Enviando formulario...';
    alerta.classList.add('exito');
  }

  // Agregamos al elemento padre, el elemento que acabamos de crear
  formulario.appendChild(alerta);
});
