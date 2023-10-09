// Variables vs Objetos

// const nombre = 'Tarta';
// const precio = 11;
// const stock = true;

const producto = {
  nombre: 'Tarta',
  precio: 11,
  stock: true,
};

// Ver el objeto entero
console.log(producto);
console.table(producto);

// Ver propiedades del objeto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.stock);

// Destructuring - Crear una variable con la propiedad de un objeto
const { nombre, precio, stock } = producto;
console.log(nombre);
console.log(precio);
console.log(stock);

// Object Literal Enhacement - Crear un objeto a partir de variables
const usuario = 'Jorge';
const autenticado = true;

// Si se cambia el nombre de la variable para la propiedad, la sintaxis debe ser -> nombrePropiedad: variable,
const usuarioAutenticado = {
  usuarioNuevo: usuario,
  autenticadoNuevo: autenticado,
};

console.log(usuarioAutenticado);

// Sino, la sintaxis puede ser de la siguiente forma
const usuario2 = 'Sara';
const autenticado2 = true;

const usuarioAutenticado2 = {
  usuario2,
  autenticado2,
};

console.log(usuarioAutenticado2);
