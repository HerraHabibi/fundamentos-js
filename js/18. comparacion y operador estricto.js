// --- COMPARACIÓN Y OPERADOR ESTRICTO ---

const num1 = 20;
const num2 = '20';

// Comparación no estricta
if (num1 == num2) {
  console.log('Son iguales');
} else {
  console.log('No son iguales');
}

// Comparación estricta
if (num1 === num2) {
  console.log('Son iguales');
} else {
  console.log('No son iguales');
}

console.log('');

// Son diferentes tipos de datos aunque el valor sea el mismo
console.log(typeof num1);
console.log(typeof num2);

console.log('');

// También se puede hacer una comparación estricta de la siguiente forma
if (num1 === Number(num2)) {
  console.log('Son iguales');
} else {
  console.log('No son iguales');
}

if (String(num1) === num2) {
  console.log('Son iguales');
} else {
  console.log('No son iguales');
}

console.log('');

// Puedes comparar booleanos de esta forma para ahorrarte el "== true"/"== false"
let logeado = true;

if (logeado) {
  console.log('Estás logeado!');
}

logeado = false;

if (!logeado) {
  console.log('No estás logeado!');
}