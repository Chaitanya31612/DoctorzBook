let mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true, min: 6, max: 255 },
  email: { type: String, required: true, min: 6, max: 255 },
  password: { type: String, required: true, max: 1024, min: 5 },
  userType: { type: String, default: "user", min: 6, max: 255 },
  updated: { type: Number, default: Date.now },
  created: { type: Number, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
