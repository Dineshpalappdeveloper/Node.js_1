const mongoose = require("mongoose")
const connectToDb = (url) => {
    if (url) {
        console.log("trying to cennect db");
    }
    mongoose.connect(url)
        .then(() => {
            console.log("connected to Db");
        })
        .catch((err) => {
            console.log("connection failed due to", err);
        })
}
module.exports = connectToDb