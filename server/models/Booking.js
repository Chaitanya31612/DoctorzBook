let mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  bookingDate: { type: Date, required: true },
  start: { type: Number, required: true },
  end: { type: Number, required: true },
  updated: { type: Number, default: Date.now },
  created: { type: Number, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
