const container = document.getElementById('container');

fetch('https://api.thedogapi.com/v1/images/search?limit=5&has_breeds=1', {
    headers: {
        'x-api-key': 'live_Ess7mqOhXPs7QoIol5oK2A86Fmvjfs9zpk7CjCTmyn6pZ5PGVUgu40NVhNMGRQbC'
    }
})
    .then(resposta => {
        if (!resposta.ok) throw new Error('Erro na requisição');
        return resposta.json();
    })
    .then(dogs => {
        // 4. Para cada dado recebido, mostrar no HTML
        dogs.forEach(dog => {
            const div = document.createElement('div');
            div.innerHTML = `
        <img src="${dog.url}" alt="Imagem do cachorro" style="max-width: 300px;">
        <h3>${dog.breeds[0].name}</h3>
        <p>${dog.breeds[0].temperament}</p>
        <hr>
      `;
            container.appendChild(div);
        });
    })
    .catch(erro => {
        container.innerHTML = `<p>Erro ao carregar os posts: ${erro.message}</p>`;
    });
