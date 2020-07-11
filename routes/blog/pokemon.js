const pokemonController = require('../../controllers/pokemon')

module.exports = function(app){
    app.get("/pokemon/:tier", pokemonController.collectFromTier)
    app.get("/pokemon/:tier/:pokemon", pokemonController.findPokemon)
    app.get('/dex/:tier/:pokemon', pokemonController.pokemonPage)
}