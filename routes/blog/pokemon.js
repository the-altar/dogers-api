const pokemonController = require('../../controllers/pokemon')

module.exports = function(app){
    app.post("/pokemon", pokemonController.findPokemon)
    app.get("/pokemon/:tier", pokemonController.collectFromTier)
    app.get('/pokemon/:tier/:pokemon', pokemonController.pokemonPage)
}