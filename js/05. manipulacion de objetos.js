// --- MANIPULACIÓN DE OBJETOS ---

const producto = {
  nombre: 'Tarta',
  precio: 11,
  stock: true,
};

// Cambiar el valor de una propiedad
producto.nombre = 'Pastel';

// Agregar una propiedad
producto.sabor = 'Fresa';

// Eliminar una propiedad
delete producto.stock;


console.table(producto);


// Crear un objeto que no se pueda ni modificar, ni añadir, ni eliminar
const alumno = {
  nombre: 'Elisa',
  edad: 23,
  trabaja: true,
};

Object.freeze(alumno);

  // Intentamos modificar el objeto
alumno.nombre = 'Sheila';         //Cambiar valor
alumno.apellido = 'Fernandez';    //Agregar propiedad
delete alumno.trabaja;            //Eliminar propiedad


console.table(alumno);


// Crear un objeto que solo se puedan modificar los valores de las propiedades existentes, pero no añadir, ni eliminar
const habitacion = {
  numero: 238,
  detalles: 'Suite',
  disponible: true,
};

  // Intentamos modificar el objeto
habitacion.disponible = false;         //Cambiar valor
habitacion.precioNoche = 80;    //Agregar propiedad
delete habitacion.detalles;            //Eliminar propiedad


console.table(habitacion);