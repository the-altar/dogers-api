const findPokemon = function (pokemon, pokedex){
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
        types: pkmn.types,
        level: pkmn.level,
        slug: pkmn.slug
    }
}

exports.findPokemon = findPokemon

exports.findPokemonByKey = function(keys, pokedex, lvl, tier, found){
    for (w in keys) {
        if (keys[w] in found) continue
        else {
            found[keys[w]] = findPokemon(keys[w], pokedex)
            found[keys[w]].level = lvl
            found[keys[w]].tier = tier
        }
    }
}