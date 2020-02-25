const bmtController = require("../../controllers/breakmyteam")

module.exports = function(app) {
    app.get("/breakmyteam", bmtController.breakmyteamPage)
    app.get("/breakmyteam/shared/:tier/:id", bmtController.shareMyTeam)

    app.post("/breakmyteam", bmtController.retrieveTeam)
    app.post("/breakmyteam/shared", bmtController.findTeam)
    app.post("/breakmyteam/upload", bmtController.uploadTeam)
}