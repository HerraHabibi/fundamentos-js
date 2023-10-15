// --- FUNCTION DECLARATION ---

// Definir función
function Sumar() {
  console.log (2 + 2);
}

// Llamar a la función para que se ejecute
Sumar();
Sumar();
Sumar();

console.log ('');

// Se puede definir una función después de llamarla y seguirá funcionando igual

Restar();

function Restar() {
  console.log (2 - 1);
}


console.log ('');



// --- PARÁMETROS EN UNA FUNCIÓN ---

// Agregar parámetros a una función
function Multiplicar(num, num2) {
  console.log (num * num2);
}

Multiplicar(7, 3);
Multiplicar(4, 6);
Multiplicar(9);

console.log ('');

// Para que no pase como en el último caso (que era igual a NaN)
// agregamos un número por defecto de la siguiente forma
function Multiplicar2(num, num2 = 2) {                  // Ahora num2 tiene 2 como valor por defecto
  console.log (num * num2);
}

Multiplicar2(9);         // 9 * 2 = 18
Multiplicar2(9, 4);      // Pero podemos seguir cambiando el valor a num2 como antes (9 * 4 = 36)



// --- FUNCIONES QUE RETORNAN VALORES ---

function Sumar2(num = 1, num2 = 2) {                  // Ahora num2 tiene 2 como valor por defecto
  return num + num2;
}

console.log ('');
const resultado = Sumar2(2, 4);
console.log(resultado);


console.log ('');


function FuncionArray(num = 1, num2 = 2) {
  return [num + num2, 'Hola!'];
}

const [resultado2, texto2] = FuncionArray(4, 6);
console.log(resultado2);
console.log(texto2);


console.log ('');


function FuncionObjeto(num = 1, num2 = 2) {
  return {
    resultado3: num + num2,
    texto3: 'Hola mundo!',
  }
}

const {resultado3, texto3} = FuncionObjeto(7, 8);
console.log(resultado3);
console.log(texto3);