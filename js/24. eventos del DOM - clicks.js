// --- EVENTOS DEL DOM: CLICKS ---

const heading = document.querySelector('.heading');

// Hay varias formas de hacer lo mismo:

// =================================================

  //Con un Function Declaration
heading.addEventListener('click', function () {
  console.log('Function Declaration: Hiciste click en Heading');
})

// --------------------------------------------------

  //Llamando a una Function Declaration
heading.addEventListener('click', ClickHeadingDeclaration);

function ClickHeadingDeclaration() {
  console.log('Function Declaration Call: Hiciste click en Heading');
}

// =================================================

  //Con un Arrow Function
heading.addEventListener('click', () => {
  console.log('Arrow Function: Hiciste click en Heading');
})

// =================================================

  //Llamando a una Function Expression (Debe ser en este orden)

    //Arrow Function
const clickHeadingArrow = () => {
  console.log('Arrow Function Call: Hiciste click en Heading');
}

heading.addEventListener('click', clickHeadingArrow);


    //Function
const clickHeadingExpression = function() {
  console.log('Function Expression Call: Hiciste click en Heading');
}

heading.addEventListener('click', clickHeadingExpression);



// CAMBIAR CONTENIDO AL USAR EL EVENTO DEL DOM CLICK

  //Para un solo elemento
heading.addEventListener('click', () => {
  heading.textContent = 'Nuevo heading';
})


  //Para varios elementos
const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace => {
  enlace.addEventListener('click', () => {
    enlace.textContent = 'Nuevo enlace';
  })
})