// --- FETCH API Y PROMISES ---

const url = 'https://jsonplaceholder.typicode.com/albums';

const consultarAPI = () => {
  fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => {
      resultado.forEach(album => {
        console.log(album);
      });
    });
}

consultarAPI();