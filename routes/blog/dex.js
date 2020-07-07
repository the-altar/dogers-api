const dexController = require("../../controllers/dex")
module.exports = function(app){
    app.get('/dex/:tier', dexController.dexPage)
    app.get('/dex', dexController.dexPage)
}