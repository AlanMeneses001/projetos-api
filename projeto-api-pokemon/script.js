const input = document.getElementById("buscarPoke");
const btn = document.getElementById("buscarBTN");
const container = document.getElementById("container");
const form = document.getElementById("formBusca");


form.addEventListener("submit", e => {
    e.preventDefault();
    const pokemon = input.value.toLowerCase().trim(); // nome em minúsculas e limpo

    container.innerHTML = "<p>Carregando...</p>"
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(resposta => {
            if (!resposta.ok) throw new Error("Erro ao carregar dados.");
            return resposta.json();
        })
        .then(pokemon => {
            const div = document.createElement("div");
            div.className = "pokemons";

            return fetch(`https://pokeapi.co/api/v2/   pokemon-species/${pokemon.name}`)
                .then(res => res.json())
                .then(species => {
                    const cor = species.color.name;
                    const lendario = species.is_legendary ? "Sim" : "Não";

                    div.innerHTML = `
                        <img src="${pokemon.sprites.front_default}" alt="Imagem do pokémon ${pokemon.name}">
                        <h3>${pokemon.name}</h3>
                        <p>Tipo: ${pokemon.types.map(t => t.type.name).join(" / ")}</p>
                        <p>Habilidades: ${pokemon.abilities.map(ab => ab.ability.name).join(", ")}</p>
                        <p>Cor: ${cor}</p>
                        <p>Lendário: ${lendario}</p>
                    `;

                    container.innerHTML = '';
                    container.appendChild(div);
                });
        })
        .catch(err => {
            container.innerHTML = `<p style="color: red;">Pokémon não encontrado.</p>`;
            console.error(err);
        });
});
