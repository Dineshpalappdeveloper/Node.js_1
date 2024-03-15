const connectDb = require("./db/connect")
const product = require('./models/product')
const ProductJsonData = require("./product.json")
require('dotenv').config()

const sendData = async () => {
    try {
        await connectDb(process.env.MONGO_URL)
        await product.deleteMany()
        await product.create(ProductJsonData)
        console.log("created");
    } catch (error) {
        console.log(error);
    }
}
sendData()