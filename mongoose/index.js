// Mongoose connect is called once by the app.js & connection established
// No need to include it elsewhere

const mongoUri = process.env.MONGODB_URI
const mongoose = require('mongoose')

// app will start running AFTER the connection to the database has been established
module.exports = function (callback) {
    mongoose.connect(mongoUri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
        .then(() => {
            console.log('DB Connected!')
            callback()
        })
        .catch(err => {
            console.log(`DB Connection Error: ${err.message}`);
        });
}

