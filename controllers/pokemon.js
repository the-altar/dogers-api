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
    if (tier in dex.tiers) {
        return res.json({ pokemon: dex.tiers[tier], status: 1 })
    }
    return res.json({ pokemon: null, status: 0 })
}

exports.pokemonPage = (req, res) => {
    const tier = req.params.tier
    const pkmn = req.params.pokemon

    if (tier in dex.tiers) {
        if (pkmn in dex.tiers[tier]) {
            return res.sendFile('index.html', { root: './public' });
        }
    }

    return res.json({ message: "Page not found" })
}
