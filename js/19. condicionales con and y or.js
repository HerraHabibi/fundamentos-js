// --- CONDICIONALES CON AND Y OR ---

const saldo = 900;
const pagar = 1000;
const tarjeta = true;

if (saldo >= pagar) {
  // Si la condición se cumple, se ejecuta esto
  console.log('Puedes pagar con tu saldo');
} else if (tarjeta) {
  // Si la primera condición no se cumple, pero la segunda sí, se ejecuta esto
  console.log('Puedes pagar con tu tarjeta');
} else {
  // Si ninguna condición se cumple, se ejecuta esto
  console.log('No puedes pagar');
}


// Una forma más sencilla de hacerlo sería con la puerta lógica OR

if (saldo >= pagar || tarjeta) {
  // Si CUALQUIERA de las condiciones se cumple, se ejecuta esto
  console.log('Puedes pagar');
} else {
  // Si ninguna condición se cumple, se ejecuta esto
  console.log('No puedes pagar');
}


// De esta forma se puede comprobar que dos condiciones se cumplen

if (saldo >= pagar && tarjeta) {
  // Si LAS DOS condiciones se cumplen, se ejecuta esto
  console.log('Puedes pagar con saldo o con tarjeta');
} else {
  // Si ninguna condición se cumple, se ejecuta esto
  console.log('Quizás puedas pagar con alguna de las dos opciones');
}



// Puertas lógicas:
/*
  || - Al menos una condición se cumple
  && - Todas las condiciones se cumplen
  ...
*/