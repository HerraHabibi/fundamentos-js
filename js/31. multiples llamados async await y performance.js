// --- MÚLTIPLES LLAMADOS ASYNC/AWAIT Y PERFORMANCE ---

const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/photos';

// Para hacer varias consultas async/wait, NO debemos hacerlo de la siguiente forma,
// porque así hasta que no termine de hacer todos los await de una consulta,
// no empezará con la siguiente

const consultarAPI = async () => {
  const inicioPerformance = performance.now();

  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  // console.log(resultado);
  
  // console.log('Iniciando segunda consulta...');

  const respuesta2 = await fetch(url2);
  const resultado2 = await respuesta2.json();
  // console.log(resultado2);

  const finPerformance = performance.now();

  console.log(`Ejecución PRIMER async: ${finPerformance - inicioPerformance} ms`);
}

consultarAPI();



// Para ello se realiza de esta forma, así las consultas iniciarán de forma paralela,
// por lo que ya SOLO dependen de la API que se esté solicitando y no de lo que tarden el resto
// de consultas que se están haciendo:

const consultarAPI2 = async () => {
  const inicioPerformance = performance.now();

  const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)]);
  const resultado = await respuesta.json();
  const resultado2 = await respuesta2.json();

  // console.log(resultado);
  // console.log(resultado2);

  const finPerformance = performance.now();

  console.log(`Ejecución SEGUNDO async: ${finPerformance - inicioPerformance} ms`);
}

consultarAPI2();