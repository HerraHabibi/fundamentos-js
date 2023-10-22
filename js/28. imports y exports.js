// --- IMPORTS Y EXPORTS ---

// Sirven para dividir las acciones de tu JS en diferentes archivos

// En la etiqueta script del html hay que agregar el atributo "type='module'" para que funcione quedando de la siguiente manera:
// <script src='...' type='module'></script>


// Si se utiliza un 'export default':
// Al nombre de la función no hace falta ponerle el nombre que tiene en el archivo original
// (en el archivo se llama 'Sumar' y aquí se llama 'FuncionSumar')

// import FuncionSumar from './28.2. funciones.js';

// const resultado = FuncionSumar(20,30);

// console.log(resultado);



// Pero al usar 'export {}':
// Hay que respetar los nombres de las funciones del archivo original

import {Sumar, Restar} from './28.2. funciones.js';
// Se debe utilizar "{...}" aunque solo se quiera importar una función

const resultadoSuma = Sumar(20,30);
const resultadoResta = Restar(20,30);

console.log(resultadoSuma);
console.log(resultadoResta);



// En caso de que quieras cambiarle el nombre a las funciones debes hacer lo siguiente:

// import {Sumar as FuncionSumar, Restar as FuncionRestar} from './28.2. funciones.js';

// const resultadoSuma = FuncionSumar(20,30);
// const resultadoResta = FuncionRestar(20,30);

// console.log(resultadoSuma);
// console.log(resultadoResta);