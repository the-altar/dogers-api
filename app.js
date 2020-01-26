const server = require('express')();
const bodyParser = require('body-parser');
const cors = require("cors")
const port = process.env.PORT || 3000;

// local in-memory data
const localDex = {
    tiers:{
        ou: require("./data/gen8ou.json"),
    },
    items: require("./data/itemdex.json"),
    moves: require("./data/movedex.json")
}
//configurações publicas para dentro do servidor express, adicionando middlewares (body-parser,cors)
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cors())

server.get("/items", (req, res) => {
    return res.json(localDex.items)
})

server.get("/items/:slug", (req, res) => {
    const itemSlug = req.params.slug
    return res.json(localDex.items[itemSlug])
})

server.get("/moves", (req, res) => {
    return res.json(localDex.moves)
})

server.get("/moves/:slug", (req, res) => {
    const moveSlug = req.params.slug
    return res.json(localDex.moves[moveSlug])
})

server.get("/pokemon/:tier/:slug", (req, res) => {
    const pkmn = req.params.slug
    const tier = req.params.tier

    if (tier in localDex) {
        if (pkmn in localDex[tier]) {
            let pokemon = localDex[tier][pkmn]
            return res.json({ dogars: pokemon, status: 1 })
        }
    }

    return res.json({ dogars: false, status: 0 })

})

server.get("pokemon/:tier", (req, res) => {
    const tier = req.params.tier
    if (tier in localDex) {
        return res.json({ dogars: localDex[tier], status: 1 })
    }
    return res.json({ dogars: null, status: 0 })
})

server.get("/all/:tier", (req, res)=>{
    const tier = req.params.tier

    if (tier in localDex.tiers){
        return res.json({
            dex: localDex.tiers[tier],
            items: localDex.items,
            moves: localDex.moves
        })
    }
    return res.json(false)
})

server.listen(port, () => console.log(`Express started at port: ${port}`));