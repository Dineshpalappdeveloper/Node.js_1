const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const MainRoutes = require("./routes/product")
const connectToDb = require('./db/connect')
const cors = require('cors')
app.use(bodyParser.json())
require('dotenv').config()
app.use(cors({
    origin: "*"
}))
app.use(express.json())
app.get("/", (req, res) => {
    res.send("welcome To Crud")
})
app.use("/", MainRoutes)
app.post("/add-user", (req, res) => {
    // Only send the necessary data from req
    res.send({
        message: "data added ",
        data: req.body.name  // Send req.body instead of req
    })
})
const startconnection = async () => {
    try {
        await connectToDb(process.env.MONGO_URL)

        app.listen(PORT, () => {
            console.log(`server is running on :-`, PORT);
        })

    } catch (error) {
        console.log(error);
    }
}
startconnection()
