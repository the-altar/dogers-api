const bmtController = require("../../controllers/breakmyteam")

module.exports = function(app) {
    app.get("/breakmyteam", bmtController.breakmyteamPage)
    app.get("/breakmyteam/:tier", bmtController.retrieveAllKeysFromTier)
    app.get("/breakmyteam/shared/:tier/:id", bmtController.shareMyTeam)

    app.post("/breakmyteam", bmtController.retrieveTeam)
    app.post("/breakmyteam/shared", bmtController.findTeam)
    app.post("/breakmyteam/upload", bmtController.uploadTeam)
    app.post('/breakmyteam/retrieve', bmtController.retrievePokemonWithKeys)
}