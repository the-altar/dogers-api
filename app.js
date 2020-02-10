const express = require('express')
const server = express();
const bodyParser = require('body-parser');
const cors = require("cors")
const port = process.env.PORT || 3000;

// local, in-memory data
const localDex = {
    tiers:{
        ou: require("./data/gen8ou.json"),
        uu:require("./data/gen8uu.json"),
        ru: require("./data/gen8ru.json"),
        vgc: require("./data/gen8vgc.json"),
        ubers:require("./data/gen8ubers.json"),
        bss:require("./data/gen8battlestadium.json"),
        monotype: require("./data/gen8monotype.json"),
    },
    items: require("./mundane/itemdex.json"),
    moves: require("./mundane/movedex.json"),
    abilities: require("./mundane/abilitydex.json")
}
//configurações publicas para dentro do servidor express, adicionando middlewares (body-parser,cors)
server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cors())


server.get('/', (req, res)=>{
    res.sendFile("public/index.html")
})
server.get("/bmt", (req, res)=>{
    res.sendFile("./public/index.html", {root: __dirname})
})

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

    if (tier in localDex.tiers) {
        if (pkmn in localDex.tiers[tier]) {
            let pokemon = localDex.tiers[tier][pkmn]
            return res.json({ dogars: pokemon, status: 1 })
        }
    }

    return res.json({ dogars: false, status: 0 })

})

server.get("/pokemon/:tier", (req, res) => {
    const tier = req.params.tier
    if (tier in localDex.tiers) {
        return res.json({ dogars: localDex.tiers[tier], status: 1 })
    }
    return res.json({ dogars: null, status: 0 })
})

server.get("/:tier/moves_and_items/:slug", (req,res)=>{
    const tier = req.params.tier
    const slug = req.params.slug

    let moves = []
    let items = []
    for(let i in localDex.tiers[tier][slug].moves){
        localDex.moves[localDex.tiers[tier][slug].moves[i][0]].usage = localDex.tiers[tier][slug].moves[i][1]
        moves.push(localDex.moves[localDex.tiers[tier][slug].moves[i][0]])
    }

    for(let i in localDex.tiers[tier][slug].items){

        const itemKey = localDex.tiers[tier][slug].items[i][0]
        const usage = localDex.tiers[tier][slug].items[i][1]

        if (itemKey in localDex.items){
            localDex.items[itemKey].show = false
            localDex.items[itemKey].usage = usage     
            items.push(localDex.items[itemKey])
        }
    }

    return res.json({
        moves: moves,
        items: items
    })
})

server.post("/bmt", (req, res)=>{
    for(let p in req.body){
        let moves = []
        for(let m in req.body[p].moves){
            moves.push(localDex.moves[req.body[p].moves[m]])
        } 
        req.body[p].moves = moves
        req.body[p].ability =  localDex.abilities[req.body[p].ability]
        req.body[p].item = localDex.items[req.body[p].item]
    }
    return res.json(req.body) 
})

server.listen(port, () => console.log(`Express started at port: ${port}`));