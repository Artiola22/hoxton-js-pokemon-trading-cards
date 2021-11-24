

// - Create a card using JS that represents a single pokemon
function createPokemon (pokemon)  {

    const image = pokemon.sprites.other['official-artwork'].front_default

    //Create main li element
const liEl = document.createElement('li')
liEl.setAttribute('class', 'card')

//Create pokemon title
const titleEl = document.createElement("h2")
titleEl.textContent = pokemon.name

//Create pokemon image
const imageEl =document.createElement('img')
imageEl.setAttribute('width', '256')
imageEl.setAttribute('class', 'card--img')
imageEl.setAttribute('src', image)

//Create pokemon attributes ul
const attributesEl = document.createElement('ul')
attributesEl.setAttribute('class', 'card--text')

//Create pokemon attributes li for each stat
for( const statData of pokemon.stats) {
    const text =  ` ${statData.stat.name.toUpperCase()}: ${statData.base_stat}`
    const attributeEl = document.createElement('li')
    attributeEl.textContent = text
    attributesEl.append(attributeEl)
}

//Add li's children
liEl.append(titleEl, imageEl, attributesEl)

//Add pokemon li to .cards ul
const ulEl = document.querySelector('.cards')
ulEl.append(liEl)

}

for ( const pokemon of pokemons){
    createPokemon(pokemon)
}