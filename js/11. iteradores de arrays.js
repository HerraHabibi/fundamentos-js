// --- ITERADORES DE ARRAYS ---

const tecnologias = ['CSS', 'JavaScript', 'React', 'Node.js'];

// -> Acceder a cada elemento del array <-

// forEach: Solo permite listar uno por uno los elementos del array
tecnologias.forEach(function(tecno){
  console.log(tecno);
})

const arrayForEach = tecnologias.forEach(function(tecno){
  return tecno;
})

console.log(arrayForEach);

console.log('');

// map: Permite listar uno por uno los elementos del array y crear un nuevo array [USADO EN REACT.JS]
tecnologias.map(function(tecno){
  console.log(tecno);
})

const arrayMap = tecnologias.map(function(tecno){
  return tecno;
})

console.log(arrayMap);