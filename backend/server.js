const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys");

// Connect to MongoDB
mongoose
  .connect(
    db.mongoURI, 
      { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const listen = app.listen(db.port, () => console.log(`Server running on port ${db.port}`));

module.exports = app
module.exports.port = listen.address().port;
