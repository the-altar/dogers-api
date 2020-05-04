const rootController = require("../controllers/root")
const dex = require("../settings").dex

module.exports = function (app) {
    app.get('/', rootController.default)    
 
    require('./blog/pokemon')(app)
    require('./blog/breakmyteam')(app)    
    require('./blog/dex')(app)
}