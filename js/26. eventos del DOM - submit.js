// --- EVENTOS DEL DOM: SUBMIT ---

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();        // Evita que se envie el formulario a la página del action

  const nombre = document.querySelector('.nombre').value;
  const password = document.querySelector('.password').value;
  
  if (nombre === '' || password === '')
    console.log('Debes rellenar todos los campos');
  else
    console.log('Enviando formulario...');

});
