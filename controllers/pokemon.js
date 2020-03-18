const dex = require("../settings").dex

exports.findPokemon = (req, res) => {
    const pkmn = req.body.pokemon
    const tier = req.body.tier

    if (tier in dex.tiers) {
        if (pkmn in dex.tiers[tier]) {
            let pokemon = dex.tiers[tier][pkmn]
            return res.json({ pokemon: pokemon, status: 1 })
        }
    }
    return res.json({ pokemon: false, status: 0 })
}

exports.collectFromTier = (req, res) => {
    const tier = req.params.tier
    const arr = []
    if (tier in dex.tiers) {
        for(pkmn in dex.tiers[tier]){
            arr.push({
                slug: dex.tiers[tier][pkmn].slug,
                types: dex.tiers[tier][pkmn].types,
                url: false
            })
        } 
        return res.json({ pokemon: arr, status: 1 })
    }
    return res.json({ pokemon: null, status: 0 })
}

exports.pokemonPage = (req, res) => {
    const tier = req.params.tier
    const pkmn = req.params.pokemon

    if (tier in dex.tiers) {
        if (pkmn in dex.tiers[tier]) {
            return res.sendFile('index.html', { root: './public/vue-page' });
        }
    }

    return res.json({ message: "Page not found" })
}
