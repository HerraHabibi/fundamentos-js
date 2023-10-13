// --- DECLARACIÓN DE FUNCIONES ---

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
