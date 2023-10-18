// --- ARROW FUNCTIONS Y ARRAY METHODS ---

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

//CASO 1:
//--------

// Podemos sustituir esto:
const nuevoArray = tecnologias.map(function (tech) {
  if (tech === 'HTML') {
    return 'GraphQL';
  } else return tech;
});

// Por esto así utilizamos una Arrow Function:
const nuevoArray2 = tecnologias.map(tech => {
  if (tech === 'HTML') {
    return 'GraphQL';
  } else return tech;
});

console.log(nuevoArray);
console.log(nuevoArray2);
console.log('');

//CASO 2:
//--------

// Podemos sustituir esto:
const nuevoArray3 = tecnologias.filter(function (tech) {
  return tech !== 'React';
});

// Por esto así utilizamos una Arrow Function:
const nuevoArray4 = tecnologias.filter(tech => tech !== 'React');

console.log(nuevoArray3);
console.log(nuevoArray4);
