exports.findPokemon = function (pokemon, pokedex){
    let pkmn = false
    if (pokemon in pokedex){
        pkmn = pokedex[pokemon]
    } else {
        return false
    }

    return {
        moves: pkmn.moves,
        spreads: pkmn.spreads,
        items: pkmn.items,
        abilities: pkmn.abilities,
        stats: pkmn.stats,
        level: pkmn.level
    }
}