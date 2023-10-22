function Sumar(num1, num2) {
  return num1 + num2;
}

function Restar(num1, num2) {
  return num1 - num2;
}

// Hay dos formas posibles de exportar código:

// - export defalt:

// export default Sumar;

// Con este solo se puede exportar una sola función,
// por lo que si descomentásemos la siguiente línea daría error:

// export default Restar;




// - export {}

export {
  Sumar,
  Restar,
}

// Permite exportar varias funciones,
// por lo que esto no daría error