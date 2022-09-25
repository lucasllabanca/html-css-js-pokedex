async function getPokemonByNumber(pokemonNumber) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    return await response.json()
}

async function getNewImg(src, name) {
    const img = document.createElement('img')
    img.src = src
    img.alt = name
    img.title = name
    return img
}

async function getPokemonStripes() {
    const params = new URLSearchParams(window.location.search)
    if (!params) return;

    const pokemonNumber = params.get('id')
    if (!pokemonNumber) return;

    const pokemon = await getPokemonByNumber(pokemonNumber)

    const h1 = document.createElement('h1')
    const div = document.createElement('div')
    h1.textContent = `#${pokemon.order} - ${pokemon.name}`
    div.className = 'pokemon'
    
    document.body.appendChild(h1)

    if (pokemon.sprites.back_default) div.appendChild(await getNewImg(pokemon.sprites.back_default, pokemon.name))
    if (pokemon.sprites.back_female) div.appendChild(await getNewImg(pokemon.sprites.back_female, pokemon.name))
    if (pokemon.sprites.back_shiny) div.appendChild(await getNewImg(pokemon.sprites.back_shiny, pokemon.name))
    if (pokemon.sprites.back_shiny_female) div.appendChild(await getNewImg(pokemon.sprites.back_shiny_female, pokemon.name))
    if (pokemon.sprites.front_default) div.appendChild(await getNewImg(pokemon.sprites.front_default, pokemon.name))
    if (pokemon.sprites.front_female) div.appendChild(await getNewImg(pokemon.sprites.front_female, pokemon.name))
    if (pokemon.sprites.front_shiny) div.appendChild(await getNewImg(pokemon.sprites.front_shiny, pokemon.name))
    if (pokemon.sprites.front_shiny_female) div.appendChild(await getNewImg(pokemon.sprites.front_shiny_female, pokemon.name))

    document.body.appendChild(div)
}

getPokemonStripes()
