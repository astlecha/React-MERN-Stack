var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

var routes = require("./routes/routes");
var routes = require("./routes/api-routes");

var app = express();
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use("/", routes);

app.use(express.static("public"));

// ------------------------------------------------
// Configure Mongoose
var db = process.env.MONGODB_URI || "mongodb://localhost/new-mern";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
  if (error) {
    console.error(error);
  }
  else {
    console.log("Mongoose connection is successful");
  }
});

// -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});