module.exports = function (pokemon, pokedex, movedex){
    let pkmn = false
    if (pokemon in pokedex){
        pkmn = pokedex[pokemon]
    }
    let moves = []

    for(let m in pokedex[pokemon].moves.slice(0,10)){
        const move = pokedex[pokemon].moves[m][0]
        if ( move in movedex ){
            if (movedex[move].power > 0){
                moves.push(movedex[move])
            }
        }
    }

    pkmn.moves = moves
    return pkmn
}