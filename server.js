const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const MainRoutes = require("./routes/product");
const globalRouter = require("./routes/routes");
const connectToDb = require("./db/connect");
const cors = require("cors");
app.use(bodyParser.json());
require("dotenv").config();
const { errorHandler } = require("./middleware/middleware");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome To Crud");
});
app.use("/", MainRoutes);
app.use("/", globalRouter);
app.post("/add-user", (req, res) => {
  // Only send the necessary data from req
  res.send({
    message: "data added ",
    data: req.body.name, // Send req.body instead of req
  });
});

// put errorHandler after all routes so it handle all routes error
app.use(errorHandler);
const startconnection = async () => {
  try {
    await connectToDb(process.env.MONGO_URL);

    app.listen(PORT, () => {
      console.log(`server is running on :-`, PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
startconnection();
