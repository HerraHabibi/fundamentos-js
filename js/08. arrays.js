// --- ARRAYS ---

const tecnologias = [10, 15, true, 'Marcelo'];

console.log(tecnologias);
console.table(tecnologias);

//Ver un índice concreto de un array
console.log(tecnologias[0]);
console.log(tecnologias[1]);
console.log(tecnologias[2]);
console.log(tecnologias[200]); //Si no existe, el resultado será undefined

//Ver cantidad de índices de un array 
console.log(tecnologias.length);

//Mostrar todos los índices de un array como un string separado por comas
console.log(tecnologias.toString());
