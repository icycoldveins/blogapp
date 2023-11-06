const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Define user schema
  username: String,
  email: String,
  password: String,
  // Add other fields as necessary
});

module.exports = mongoose.model("User", userSchema);
