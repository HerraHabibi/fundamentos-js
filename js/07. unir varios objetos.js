// --- UNIR VARIOS OBJETOS ---

const producto = {
  nombre: 'Tarta',
  precio: 11,
  stock: true,
};

const cliente = {
  nombre: 'Ignacio',
  premium: true,
};

// De esta forma funcionaría, pero al tener diferentes propiedades con el mismo nombre,
// la propiedad del primer objeto y la del final acabarían teniendo el valor del segundo objeto
// const productoCliente = Object.assign(producto, cliente);

// producto.nombre -> 'Ignacio'
// cliente.nombre -> 'Ignacio'
// productoCliente.nombre -> 'Ignacio'

const productoCliente = {
  producto: { ...producto },
  cliente: { ...cliente },
};
console.log(productoCliente);
console.log(producto);
console.log(cliente);
