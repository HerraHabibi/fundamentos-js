// --- SCOPE DE VARIABLES ---

// Podemos crear una VARIABLE dentro de una función CON un NOMBRE REPETIDO y VALORES DIFERENTES y
// el valor de éste SOLO tendrá efecto al ejecutar la FUNCIÓN, de otro modo tendrá el valor normal

const precio = 300;

function PrimeraFuncion() {
  console.log(precio);
}

PrimeraFuncion();             //Imprime el valor de la línea 5

function SegundaFuncion() {
  const precio = 600;
  console.log(precio);
}

console.log(precio);          //Imprime el valor de la línea 5

SegundaFuncion();             //Imprime el valor de la línea 14