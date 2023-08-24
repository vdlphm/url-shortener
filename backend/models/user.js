const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null, require: true },
  last_name: { type: String, default: null, require: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);
