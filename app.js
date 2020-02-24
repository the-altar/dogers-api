const express = require('express')
const server = express();
const bodyParser = require('body-parser');
const cors = require("cors")
const port = process.env.PORT || 8080;
const helpers = require("./helpers/helpers");

// local, in-memory data
const localDex = {
    tiers: {
        ou: require("./data/ou.json"),
        uu: require("./data/uu.json"),
        ru: require("./data/ru.json"),
        vgc: require("./data/vgc.json"),
        ubers: require("./data/ubers.json"),
        bss: require("./data/bss.json"),
        monotype: require("./data/monotype.json"),
    },
    alias: require("./data/aliases.json"),
    items: require("./mundane/itemdex.json"),
    moves: require("./mundane/movedex.json"),
    abilities: require("./mundane/abilitydex.json")
}
//configurações publicas para dentro do servidor express, adicionando middlewares (body-parser,cors)
server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cors())


server.get('/', (req, res) => {
    return res.sendFile('public/index.html', { root: __dirname });
})

server.get('/pokemon/:tier/:pokemon', (req, res) => {
    const tier = req.params.tier
    const pkmn = req.params.pokemon

    if (tier in localDex.tiers) {
        if (pkmn in localDex.tiers[tier]) {
            return res.sendFile('public/index.html', { root: __dirname });
        }
    }

    return res.json({message: "Page not found"})
})

server.get("/bmt", (req, res) => {
    res.sendFile("./public/index.html", { root: __dirname })
})

server.post("/pokemon", (req, res) => {
    const pkmn = req.body.pokemon
    const tier = req.body.tier

    if (tier in localDex.tiers) {
        if (pkmn in localDex.tiers[tier]) {
            let pokemon = localDex.tiers[tier][pkmn]
            return res.json({ pokemon: pokemon, status: 1 })
        }
    }
    return res.json({ pokemon: false, status: 0 })
})

server.get("/pokemon/:tier", (req, res) => {
    const tier = req.params.tier
    if (tier in localDex.tiers) {
        return res.json({ pokemon: localDex.tiers[tier], status: 1 })
    }
    return res.json({ pokemon: null, status: 0 })
})

server.post("/bmt", (req, res) => {
    let response = { weak: {}, pokemon: [] }
    if (req.body.pokemon[0] === undefined || req.body.pokemon[0].name === '' ) return
    for (let p in req.body.pokemon) {
        let pokemon = {}

        let pkmn = req.body.pokemon[p].name
        
        if (pkmn in localDex.alias) {
            pkmn = localDex.alias[pkmn]
        }
        
        if (pkmn in localDex.tiers[req.body.tier.alias]) {
            for (w in localDex.tiers[req.body.tier.alias][pkmn].weak) {
                if (w in response.weak) continue
                else {
                    response.weak[w] = helpers(w, localDex.tiers[req.body.tier.alias])
                    response.weak[w].level = req.body.tier.defaultLevel
                    response.weak[w].tier = req.body.tier.alias
                }
            }

            let moves = []
            for(let m in req.body.pokemon[p].moves){
                moves.push(localDex.moves[req.body.pokemon[p].moves[m]])
            } 
    
            if(req.body.pokemon[p].item === ""){
                pokemon.item = {name: "Nothing", slug:"nothing"}
            } else {
                pokemon.item = localDex.items[req.body.pokemon[p].item]
            }

            pokemon.moves = moves
            pokemon.ability =  localDex.abilities[req.body.pokemon[p].ability]
            pokemon.data = localDex.tiers[req.body.tier.alias][pkmn]
            pokemon.spread = req.body.pokemon[p].spread
            pokemon.nature = req.body.pokemon[p].nature
            pokemon.level = req.body.pokemon[p].level
            pokemon.alias = req.body.pokemon[p].name
            response.pokemon.push(pokemon)

        } else {
            return res.json({ sucess: false, message: `${pkmn} wasn't found in the tier`, response: {} })
        }

    }
    return res.json({ sucess: true, message: "Success!", response: response })
})

server.listen(port, () => console.log(`Express started at port: ${port}`));