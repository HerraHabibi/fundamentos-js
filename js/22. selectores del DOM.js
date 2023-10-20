// --- SELECTORES DEL DOM ---

// -- querySelector --

  //Sirve para obtener el objeto con todas las clases que almacena UN SOLO ELEMENTO CONCRETO HTML

//Funciona como en CSS:
  //- para seleccionar una etiqueta - ej.: 'h1'
  //- para seleccionar una clase    - ej.: '.clase'
  //- para seleccionar un id        - ej.: '.id'
const etiquetaHeading = document.querySelector('h2');
console.log(etiquetaHeading);

const claseHeading = document.querySelector('.heading');
console.log(claseHeading);

const idHeading = document.querySelector('#heading');
console.log(idHeading);

//Obtenemos el texto del elemento
console.log(idHeading.textContent);

//Obtenemos el tipo de elemento
console.log(idHeading.tagName);

//Obtenemos todas las clases a la que pertenece
console.log(idHeading.classList);

//Obtenemos su id
console.log(idHeading.id);


//Solo se obtiene un único elemento
const enlaces = document.querySelector('.navegacion a');    //Tenemos varios enlaces en la clase .navegacion
console.log(enlaces);         //Pero sin embargo solo obtenemos información del primer elemento que coincide
