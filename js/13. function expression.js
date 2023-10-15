// --- FUNCTION EXPRESSION ---

// Definir función: Declaration vs Expression

  // Declaration
console.log('Function Declaration:')

Sumar(3, 4);
function Sumar(num = 1, num2 = 2) {
  console.log(num + num2);
}

Sumar(3, 4);


console.log('');

  // Expression
console.log('Function Expression:')

//Sumar2(5, 6);  -> Esto dará un error porque al ser una VARIABLE, necesita primero declararse, caso contrario con los function declaration
const Sumar2 = function (num = 1, num2 = 2) {
  console.log(num + num2);
}

Sumar2(6, 8);


console.log('');


// Return en function expressions

const SumarReturn = function (num = 0, num2 = 0) {
  return num + num2;
}

const resultado = SumarReturn(32)

console.log('Return en function expressions:')
console.log(resultado);