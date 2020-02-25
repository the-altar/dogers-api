exports.findPokemon = function (pokemon, pokedex){
    let pkmn = false
    if (pokemon in pokedex){
        pkmn = pokedex[pokemon]
    }
    return pkmn
}