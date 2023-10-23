// --- TEMPLATE STRINGS ---

const producto = 'Tablet de 12 pulg.';
const precio = 400;
const marca = 'LG';
function TextoDeFuncion() {
  return 'Esto es un texto de una función.';
}

// Formas antigua de concatenar variables en un mensaje: 
console.log(producto, ', $', precio, ', Marca:', marca, ',', TextoDeFuncion());
console.log(producto + ' , $' + precio + ' , Marca: ' + marca + ' , ' + TextoDeFuncion());

// Mejor forma de concatenar variables:
console.log(`${producto} , $${precio} , Marca: ${marca} , ${TextoDeFuncion()}`);