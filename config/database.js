const mongoose = require("mongoose");

const db = async () => {
  mongoose.connect('mongodb+srv://dhrutip2005:1234@cluster0.otquczc.mongodb.net/');
  console.log("Database connected.");
};

module.exports = db;
