const bmtController = require("../../controllers/breakmyteam")

module.exports = function(app) {
    app.get("/mysquad", bmtController.breakmyteamPage)
    app.get("/mysquad/:tier", bmtController.retrieveAllKeysFromTier)
    app.get("/mysquad/shared/:tier/:id", bmtController.shareMyTeam)

    app.post("/mysquad", bmtController.retrieveTeam)
    app.post("/mysquad/shared", bmtController.findTeam)
    app.post("/mysquad/shared/latest", bmtController.getLatestEntries)
    app.post("/mysquad/upload", bmtController.uploadTeam)
    app.post('/mysquad/retrieve', bmtController.retrievePokemonWithKeys)
}