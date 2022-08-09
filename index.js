const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// import routes
// const posts = require("./routes/post");
const Portfolio=require('./routes/PortfolioRoute')

// middleware
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//Routes
app.use("/api/portfolio",Portfolio);

// Base API

app.get("/", (req, res) => {
  res.send("Hello I am working");
});
app.get("/api", (req, res) => {
  res.send("API is on fire⚡");
});




const PORT = process.env.PORT || 5000;
// CONNECTION_URL=mongodb://localhost:27017/
CONNECTION_URL=process.env.CONNECTION_URL;



mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
