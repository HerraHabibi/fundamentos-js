// --- DESTRUCTURING DE ARRAYS ---

const tecnologias = ['CSS', 'JavaScript', 'React', 'Node.js'];

// Extraer todos los elementos de un array
const [pos0, pos1, pos2, pos3] = tecnologias;

console.log(pos0);
console.log(pos1);
console.log(pos2);
console.log(pos3);

// Extraer un elemento en concreto del array
const tecnologias2 = ['CSS', 'JavaScript', 'React', 'Node.js'];

const [ , , , tec3] = tecnologias;

console.log(tec3);

