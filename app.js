const server = require('express')();
const bodyParser = require('body-parser');
const cors = require("cors")
const port = 8080 || event;

// local in-memory data
const dexdata = require("./data/dex.json")
const battledex = {
    ou: require("./data/gen8ou.json")
}
//configurações publicas para dentro do servidor express, adicionando middlewares (body-parser,cors)
server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())
server.use(cors())

server.get("/:tier/:slug", (req, res)=>{
    const pkmn = req.params.slug
    const tier = req.params.tier

    if (tier in battledex){

        if(pkmn in battledex[tier]){

            let pokemon = battledex[tier][pkmn] 
            
            pokemon.types = dexdata[pokemon.slug].types
            console.log(pokemon)
            pokemon.stats = dexdata[pokemon.slug].stats
            
            return res.json({dogars: pokemon, status: 1})
        }
    }
    return res.json({dogars: false, status:0})

})

server.get("/:tier/all",(req,res)=>{
    return {
        dexdata:  dexdata
    }
})

server.listen(port, () => console.log(`Express started at port: ${port}`));