// --- ARROW FUNCTIONS Y ARRAY METHODS ---

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const numeros = [10, 20, 30];


// Includes: Comprueba si un elemento existe en un Array   [TRUE/FALSE]
const resultadoIncludes = tecnologias.includes('React');
console.log(resultadoIncludes);

// Some: Comprueba si al menos un elemento cumple una condición   [TRUE/FALSE]
const resultadoSome = numeros.some((numero) => numero > 15);
console.log(resultadoSome);

// Every: Comprueba si TODOS los elementos cumple una condición   [TRUE/FALSE]
const resultadoEvery = numeros.every((numero) => numero > 5);
console.log(resultadoEvery);

// Find: Devuelve el primer elemento que cumpla una condición
const resultadoFind = numeros.find((numero) => numero > 15);
console.log(resultadoFind);

// Filter: Crea un array con los elementos del array original que cumplan una condición
const resultadoFilter = tecnologias.filter((tech) => tech === 'React' || tech === 'CSS');
console.log(resultadoFilter);

// Reduce: Realiza una operación matemática recorriendo todo el array a partir de un número dado
const resultadoReduce = numeros.reduce((total, numActual) => numActual + total, 0);     // Empieza desde el número 0
console.log(resultadoReduce);

// Podemos sustituir el forEach por un Arrow Function de la siguiente forma:
tecnologias.forEach( tech => console.log(tech));
// De esta forma haríamos lo mismo que antes, pero nos daría los índices del array
tecnologias.forEach( ( tech, index) => console.log(index));

// Podemos sustituir el map por un Arrow Function de la siguiente forma
const resultadoMap = tecnologias.map(tech => tech);
console.log(resultadoMap);