/* Mongoose Connection */
const mongoose = require("mongoose");
assert = require("assert");

const url = "mongodb://localhost/reddit-db";
mongoose.Promise = global.Promise;
mongoose.connect(
  url,
  { useNewUrlParser: true },
  function(err, db) {
    try {
        assert.equal(null, err);
        console.log("Connected successfully to database");
    }
    catch(err) {
        mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
        mongoose.set("debug", true);
        //console.log("There was an error connecting to the database.");
    }

    // db.close(); turn on for testing
  }
);
//mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
//mongoose.set("debug", true);

module.exports = mongoose.connection;
