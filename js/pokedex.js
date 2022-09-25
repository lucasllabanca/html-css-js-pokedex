async function getPokemonByNumber(pokemonNumber) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    return await response.json()
}

async function createPokemon(pokemonNumber) {
    const pokemon = await getPokemonByNumber(pokemonNumber)

    const div = document.createElement('div')
    const header = document.createElement('header')
    const footer = document.createElement('footer')
    const h2 = document.createElement('h2')
    const img = document.createElement('img')
    const span = document.createElement('span')
    div.className = `card ${pokemon.types[0].type.name}`
    div.setAttribute("onclick",`abrirStripes(${pokemonNumber});`);
    h2.innerText = `#${pokemon.order}`
    img.src = pokemon.sprites.front_default
    img.alt = pokemon.name
    img.title = pokemon.name
    footer.className = pokemon.types[0].type.name
    span.innerText = pokemon.name
    header.appendChild(h2)
    footer.appendChild(span)
    div.appendChild(header)
    div.appendChild(img)
    div.appendChild(footer)
    return div
}

async function getPokemons() {
    const pokedex = document.getElementById('pokedex')
    const pokemonNumbers = Array.from(new Array(151), (x, i) => i + 1);
    for (let pokemonNumber of pokemonNumbers) {
        pokedex.appendChild(await createPokemon(pokemonNumber))
    }
}

function abrirStripes(pokemonNumber) {
    window.location.href = `pokemon.html?id=${pokemonNumber}`;
}

getPokemons()
