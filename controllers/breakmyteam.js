const dex = require("../settings").dex
const methods = require("../methods");
const Team = require("../models/index").teamModel

exports.breakmyteamPage = (req, res) => {
    res.sendFile("index.html", { root: './public/vue-page' })
}

exports.uploadTeam = (req, res) => {
    console.log(req.body)
    Team.create(req.body, function (err, savedDoc) {
        if (err) return res.json({ path: "failed", code: 0 })
        return res.json({id:savedDoc._id, path: `/mysquad/shared/${savedDoc.tier}/${savedDoc._id}`, code: 1 })
    })
}

exports.findTeam = (req, res) => {
    Team.findById(req.body.id, function (err, data) {
        if (err) return res.json({ code: 0, message: "failed" })
        return res.json({ code: 1, message: "success!", team: data })
    })
}

exports.shareMyTeam = (req, res) => {
    res.sendFile("index.html", { root: './public/vue-page' })
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

            pokemon.data = {}
            pokemon.data.slug = dex.tiers[req.body.tier.alias][pkmn].slug

            if (req.body.getData) {

                let keys = Object.keys(dex.tiers[req.body.tier.alias][pkmn].weak)
                methods.findPokemonByKey(keys, dex.tiers[req.body.tier.alias], req.body.tier.defaultLevel, req.body.tier.alias, response.weak)

                pokemon.data = dex.tiers[req.body.tier.alias][pkmn]
                pokemon.moves = moves
                pokemon.ability = dex.abilities[req.body.pokemon[p].ability]
                pokemon.spread = req.body.pokemon[p].spread
                pokemon.nature = req.body.pokemon[p].nature
                pokemon.level = req.body.pokemon[p].level
                pokemon.alias = req.body.pokemon[p].name

            }

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
    res.set('Cache-Control', 'public, max-age=2592000, s-maxage=2592000'); // 1 month
    
    const tier = req.params.tier
    if (tier in dex.tiers) {
        let keys = []
        Object.keys(dex.tiers[tier]).forEach(e => {
            const el = {
                value: e,
                selected: false
            }
            keys.push(el)
        })

        return res.json({
            code: 1,
            keys: keys
        })

    } else {
        return
    }

}

exports.retrievePokemonWithKeys = (req, res) => {
    res.set('Cache-Control', 'public, max-age=2592000, s-maxage=2592000'); // 1 month
    
    const keys = req.body.keys
    const tier = req.body.tier
    let pokemon = {}
    methods.findPokemonByKey(keys, dex.tiers[tier], req.body.level, tier, pokemon)
    return res.json({
        pokemon: pokemon
    })
}

exports.getLatestEntries = (req, res) => {
    Team.find().sort({ _id: -1 }).limit(15).exec((err, docs) => {
        if (err) {
            return res.json({ code: 0 })
        }
        return res.json({ code: 1, teams: docs })
    })
}

exports.getMyUploads = (req, res) => {
    const ids = req.body
    Team.find()
        .where('_id')
        .in(ids)
        .exec(function(err, records){
            if(err){
                console.log(err)
                return res.json({code: 0})
            }
            return res.json(records)
        })
} 

exports.updateUploaded = (req,res)=>{
    Team.findOneAndUpdate({_id: req.body._id}, req.body, {}, (err, doc)=>{
        if(err){
            return res.json({code: false})
        }
        console.log("records were updated!")
        return res.json({code: true})
    })
}  

exports.remove = (req, res)=>{
    Team.deleteOne(req.body).exec()
    return res.json({sucess: true})
}
