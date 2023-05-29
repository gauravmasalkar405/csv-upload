const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://gauravmasalkar405:fe5qc6hIjHaEC8Zp@cluster0.tt35nrr.mongodb.net/"
);

const db = mongoose.connection;

db.once("open", function () {
  console.log("database connected to the server successfully!");
});

module.exports = db;
