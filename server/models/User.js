let mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  googleId: { type: String, required: false },
  name: { type: String, required: true, min: 6, max: 255 },
  email: { type: String, required: true, min: 6, max: 255 },
  password: { type: String, required: true, max: 1024, min: 5 },
  profilePhoto: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAkyeFC4CGyFj0NE7SEogOTkmAyC6OogUFbMr-hLEavZv3s1Ir",
  },
  updated: { type: Number, default: Date.now },
  created: { type: Number, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
