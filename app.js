const app = require("./settings").router()
const port = process.env.PORT;

require('./routes')(app)
require('./mongoose')(() => {
    /*require('./models').teamModel.deleteMany({}, (err)=>{
        if (err) console.log("Something went wrong!")
        console.log('all records deleted')
    })*/
    app.listen(port, () => console.log(`Express started at port: ${port}`));
})

