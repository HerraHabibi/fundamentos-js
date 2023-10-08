// --- TIPOS DE DATOS ---

// Undefined - Sin valor inicial
  let nombre;
  console.log(nombre);
  console.log(typeof nombre);
  console.log('');

// =============================================================

// Boolean - Solo dos estados posibles: True/False
  const tieneCoche = true;
  console.log(tieneCoche);
  console.log(typeof tieneCoche);
  console.log('');

  const tieneMoto = false;
  console.log(tieneMoto);
  console.log(typeof tieneMoto);
  console.log('');

// =============================================================

// Number - Se tratan todos los tipos de números por igual
  const num1 = 35.2;
  console.log(num1);
  console.log(typeof num1);
  console.log('');
  
  const num2 = 24;
  console.log(num2);
  console.log(typeof num2);
  console.log('');
  
  const num3 = -12;
  console.log(num3);
  console.log(typeof num3);
  console.log('');

// =============================================================

// String - Cadenas alfanuméricas
  const profesora = 'Martina';
  console.log(profesora);
  console.log(typeof profesora);
  console.log('');

  const producto = 'Helado de 2 Bolas';
  console.log(producto);
  console.log(typeof producto);
  console.log('');

  // Los números entre comillas son STRINGS y sin comillos NUMBERS
  const numeroString = '21';           // -> String
  console.log(typeof numeroString);

  const numeroNumber = 21;            // -> Number
  console.log(typeof numeroNumber);
  console.log('');

// =============================================================

// BigInt - Para números muy grandes (poco usado)
  const numeroGrande = BigInt(35840934580934852308452093842492738094);
  console.log(typeof numeroGrande);
  console.log('');

  // Los BigInt no se pueden mezclar con los number
    //console.log(numeroGrande + num1);            // -> Esto da error
  // Para ello usamos Number(bigInt);
    console.log(Number(numeroGrande) + num1);
    console.log('');


  // Con String(number) y Number(string) podemos cambiar los tipos de datos
    console.log(typeof numeroNumber);
    console.log(typeof String(numeroNumber));
    console.log('');
    console.log(typeof numeroString);
    console.log(typeof Number(numeroString));
    console.log('');

// =============================================================

// Symbol - Tipo de datos que aunque tengan el mismo valor, siempre serán únicos
  const primSymbol = Symbol(23);
  const segSymbol = Symbol(23);

  console.log(primSymbol.valueOf());
  console.log(segSymbol.valueOf());
  console.log(primSymbol == segSymbol);
  console.log('');

// Null - Valor nulo, se considera como un objecto
  const descuento = null;
  console.log(descuento);
  console.log(typeof descuento);