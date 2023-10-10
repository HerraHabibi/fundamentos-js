// --- MANIPULACIÓN DE ARRAYS ---

const tecnologias = ['CSS', 'JavaScript', 'React', 'Node.js'];

// Añadir elementos de un array
  
  // Estos métodos es mejor no utilizarlos, ya que modifican el array original
  //  tecnologias.unshift('HTML');            // Añade al principio del array
  //  tecnologias.push('GraphQL');            // Añade al final del array

const tecnologiasAgregadas = ['HTML', ...tecnologias, 'GraphQL'];


// Eliminar elementos de un array

  // Estos métodos es mejor no utilizarlos, ya que modifican el array original
  //  tecnologias.shift();            // Elimina el primer elemento del array
  //  tecnologias.pop();              // Elimina el último elemento del array
  //  tecnologias.splice(2);      // Elimina todos los elementos a partir del de la posición indicada (incluído)
  //  tecnologias.splice(2,2);    // Elimina la cantidad de elementos indicada después de la coma a partir del de la posición indicada en el primer digito (incluído): Eliminaría 2 y 3

  // Ejecutar una función una vez por cada elemento que tiene el array
    // const tecnologiasFilter = tecnologias.filter( function(){
    //   console.log('Hola!'); 
    // } )

  // Mostrar cada uno de los elementos del array en mensajes diferentes
    // const tecnologiasFilter = tecnologias.filter( function(tech){
    //   console.log(tech);
    // } )

const tecnologiasEliminadas = tecnologias.filter( function(tech){
  return tech !== 'CSS';                 // Compara los elementos del array con 'HTML' y en caso de que sea ese, no lo incluye en el nuevo array
  // return tech === 'JavaScript';        // Solo incluye 'JavaScript' al nuevo array
})


// Modificar elementos de un array

  // Este método es mejor no utilizarlo, ya que modifica el array original
  //  tecnologias[0] = 'HTML'

const tecnologiasModificadas = tecnologias.map( function(tech){
  if (tech === 'JavaScript') {
    return 'HTML (Modificado)';
  } else
      return tech;
})


console.table(tecnologias);
console.table(tecnologiasAgregadas);
console.table(tecnologiasEliminadas);
console.table(tecnologiasModificadas);