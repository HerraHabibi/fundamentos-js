// --- CONDICIONAL TERNARIO ---

const autenticado = false;

autenticado ?
  //Si la condición se cumple se ejecuta esto
  console.log('Estás autenticado') :
  //Sino se ejecuta esto
  console.log('No estás autenticado');


// Doble ternario

const saldo = 400;
const pagar = 500;
const tarjeta = true;

saldo > pagar ?
  //Si (saldo > pagar) se ejecuta esto
  console.log('Puedes pagar con tu saldo') :
  //Sino
  tarjeta ?
    //Si (tarjeta) se ejecuta esto
    console.log('Puedes pagar con tu tarjeta') :
    //Sino se ejecuta esto
    console.log('No puedes pagar');