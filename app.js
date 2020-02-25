const app = require("./settings").router()
const port = process.env.PORT;

require('./routes')(app)
require('./mongoose')(() => {
    app.listen(port, () => console.log(`Express started at port: ${port}`));
})

