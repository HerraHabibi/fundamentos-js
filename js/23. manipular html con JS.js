// --- MANIPULAR ELEMENTOS HTML CON JS ---

// Cambiar contenido de un elemento
const heading = document.querySelector('.heading');
console.log('Antiguo contenido de heading: ' + heading.textContent);

heading.textContent = 'Nuevo Heading';


// Cambiar el valor por defecto de un input
const inputNombre = document.querySelector('#nombre');
console.log('Antiguo contenido de inputNombre: ' + inputNombre.value);

inputNombre.value = 'Nuevo valor';


// Cambiar el contenido varios elementos con querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces.forEach( enlace => console.log('Antiguo contenido de enlaces: ' + enlace.textContent));

enlaces.forEach( enlace => enlace.textContent = 'Nuevo enlace');