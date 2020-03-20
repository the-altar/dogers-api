const bodyParser = require('body-parser');
const cors = require("cors")
const express = require('express')


// local, in-memory data
module.exports.dex = {
    tiers: {
        ou: require("./data/ou.json"),
        uu: require("./data/uu.json"),
        ru: require("./data/ru.json"),
        vgc: require("./data/vgc.json"),
        ubers: require("./data/ubers.json"),
        nu: require('./data/nu.json'),
        bss: require("./data/bss.json"),
        monotype: require("./data/monotype.json"),
        lc: require("./data/lc.json"),
        nfe: require('./data/nfe.json')
    },
    alias: require("./data/aliases.json"),
    abilities: require("./data/abilitydex.json"),
    items: require("./data/itemdex.json"),
    moves: require('./data/movedex.json')
}

module.exports.router = function(){
    let app = express()    
    //configurações publicas para dentro do servidor express, adicionando middlewares (body-parser,cors)
    app.use(express.static('public'))
    app.use(express.static('public/vue-page'))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(cors())
    return app
}