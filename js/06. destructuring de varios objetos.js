// --- DESTRUCTURING DE VARIOS OBJETOS ---

const producto = {
  nombre: 'Tarta',
  precio: 11,
  stock: true,
};

const cliente = {
  nombre: 'Ignacio',
  premium: true,
};

// Para hacer destructuring a una propiedad que tenga el mismo nombre en varios objetos, debemos hacer lo siguiente
// para asignarle un nombre diferente a una de las variables y así no dará error en el código
const { nombre } = producto;
const { nombre: nombreCliente } = cliente;

console.log(nombre);
console.log(nombreCliente);