const dex = require("../settings").dex
const methods = require("../methods");
const Team = require("../models/index").teamModel

exports.breakmyteamPage = (req, res) => {
    res.sendFile("index.html", { root: './public' })
}

exports.uploadTeam = (req, res) => {
    Team.create(req.body, function (err, savedDoc) {
        if (err) return res.json({ message: "failed", code: 0 })
        return res.json({ message: `/breakmyteam/shared/${savedDoc.tier}/${savedDoc._id}`, code: 1 })
    })
}

exports.findTeam = (req, res) => {
    Team.findById(req.body.id, function (err, data) {
        if (err) return res.json({ code: 0, message: "failed" })
        return res.json({ code: 1, message: "success!", team: data })
    })
}

exports.shareMyTeam = (req, res) => {
    res.sendFile("index.html", { root: './public' })
}

exports.retrieveTeam = (req, res) => {
    let response = { weak: {}, pokemon: [], raw: '' }
    if (req.body.pokemon[0] === undefined || req.body.pokemon[0].name === '') return
    for (let p in req.body.pokemon) {
        let pokemon = {}

        let pkmn = req.body.pokemon[p].name

        if (pkmn in dex.alias) {
            pkmn = dex.alias[pkmn]
        }

        if (pkmn in dex.tiers[req.body.tier.alias]) {
            keys = Object.keys(dex.tiers[req.body.tier.alias][pkmn].weak)
            
            methods.findPokemonByKey(keys, dex.tiers[req.body.tier.alias], req.body.tier.defaultLevel, req.body.tier.alias, response.weak)

            let moves = []
            for (let m in req.body.pokemon[p].moves) {
                const moveKey = req.body.pokemon[p].moves[m]
                if (moveKey in dex.moves) {
                    moves.push(dex.moves[moveKey])
                } else {
                    return res.json({ sucess: false, message: `There's something wrong with ${pkmn}`, response: {} })
                }
            }

            if (req.body.pokemon[p].item === "") {
                pokemon.item = { name: "Nothing", slug: "nothing" }
            } else {
                pokemon.item = dex.items[req.body.pokemon[p].item]
            }

            pokemon.moves = moves
            pokemon.ability = dex.abilities[req.body.pokemon[p].ability]
            pokemon.data = dex.tiers[req.body.tier.alias][pkmn]
            pokemon.spread = req.body.pokemon[p].spread
            pokemon.nature = req.body.pokemon[p].nature
            pokemon.level = req.body.pokemon[p].level
            pokemon.alias = req.body.pokemon[p].name
            response.pokemon.push(pokemon)

        } else {
            return res.json({ sucess: false, message: `${pkmn} wasn't found in the tier`, response: {} })
        }

    }
    response.tier = req.body.tier.alias
    response.raw = req.body.raw
    return res.json({ sucess: true, message: "Success!", response: response })
}

exports.retrieveAllKeysFromTier = (req, res) => {
    const tier = req.params.tier
    if (tier in dex.tiers) {
        return res.json({
            code: 1,
            keys: Object.keys(dex.tiers[tier])
        })
    } else {
        return
    }

} 

exports.retrievePokemonWithKeys = (req, res)=> {
    const keys = req.body.keys
    const tier = req.body.tier
    let pokemon = {}
    methods.findPokemonByKey(keys, dex.tiers[tier], req.body.level, tier, pokemon)
    return res.json({
        pokemon: pokemon
    })
}