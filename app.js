const server = require('express')();
const bodyParser = require('body-parser');
const cors = require("cors")
const port = process.env.PORT || 8080;

// local in-memory data
const localDex = {
    ou: require("./data/gen8ou.json"),
    items: require("./data/itemdex.json"),
    moves: require("./data/movedex.json")
}
//configurações publicas para dentro do servidor express, adicionando middlewares (body-parser,cors)
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cors())

server.get("/:key/:slug", (req, res) => {
    const itemSlug = req.params.slug
    const key = req.params.key
    if (key in localDex) {
        if (itemSlug in localDex[key]) {
            return res.json(localDex[key][itemSlug])
        }
    }
    return res.json(false)
})

server.get("/:key", (req, res) => {
    const key = req.params.key
    if (key in localDex) {
        return res.json(localDex[key])
    }
    return res.json(false)
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
        return res.json({ dogars: localDex[tier][req.params.tier], status: 1 })
    }
    return res.json({ dogars: null, status: 0 })
})

server.listen(port, () => console.log(`Express started at port: ${port}`));