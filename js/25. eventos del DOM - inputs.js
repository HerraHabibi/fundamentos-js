// --- EVENTOS DEL DOM: INPUTS ---

// Mostrar en consola lo que se va introduciendo en un input en tiempo real
const inputNombre = document.querySelector('.nombre');
inputNombre.addEventListener('input', (evento) => {
  console.log(evento.target.value);
});


// Mostrar el texto según se va introduciendo en un password input
const inputPassword = document.querySelector('.password');
inputPassword.addEventListener('input', () => {
  inputPassword.type = 'text';

  setTimeout(() => {
    inputPassword.type = 'password';
  }, 250); // 1sec
});
