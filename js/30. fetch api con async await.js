// --- FETCH API CON ASYN AWAIT ---

const url = 'https://jsonplaceholder.typicode.com/users';

// Sirve para lo mismo que Fetch API con Promises, pero es mucho más corto
// El 'await' hace que el código espere hasta que la variable tenga el resultado del await 

const consultarAPI = async () => {
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  resultado.forEach(usuario => {
    console.log(usuario);
  });
}

consultarAPI();