// async function fetchData(pokeNumber) {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
//     const pokemon = await response.json()
//     return pokemon
// }

// async function createPokemon(pokeNumber) {
//     const pokemon = await fetchData(pokeNumber)
//     const div = document.createElement('div')
//     const h2 = document.createElement('h2')
//     const img = document.createElement('img')
//     h2.textContent = `#${pokemon.order} - ${pokemon.name}`
//     img.src = pokemon.sprites.front_default
//     div.appendChild(h2)
//     div.appendChild(img)
//     document.body.appendChild(div)
// }

// async function getPokemons() {
//     for (i = 1; i <= 500; i++) {
//         await createPokemon(i)
//     }
// }
//const pokeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//pokeNumbers.forEach(createPokemon)

getPokemons()
