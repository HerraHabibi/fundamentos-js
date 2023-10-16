// --- ARROW FUNCTIONS ---

// De Function expression A Arrow function
const SumarFunctionExpression = function(num, num2 = 0) {
  console.log(num + num2);
}

SumarFunctionExpression(1, 2);
SumarFunctionExpression(1);

console.log('');

const SumarArrowFunction = (num, num2 = 0) => {
  console.log(num + num2);
}

SumarArrowFunction(3, 4);
SumarArrowFunction(3);


console.log('');


// Los Arrow Functions se suelen utilizar con returns
const ArrowFunct = (num, num2 = 0) => {
  return num + num2;
}

const result = ArrowFunct(5,7);

console.log(result);


console.log('');


// Y por eso, se pueden eleminar el "return"
// Esto sumado a que al ejecutar una sola línea de código en una función, podemos eliminar las llaves
// nos puede quedar un código tan simple como este:
const ArrowFunctMejorado = (num, num2 = 0) => num + num2;

const result2 = ArrowFunctMejorado(6,4);

console.log(result2);


console.log('');

// Si tan solo queremos pasarle un parámetro, podemos eliminar hasta los paréntesis
const ArrowFunctMejorado2 = num => num + 20;

const result3 = ArrowFunctMejorado2(6);

console.log(result3);