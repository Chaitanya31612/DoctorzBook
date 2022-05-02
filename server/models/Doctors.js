let mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctorName: { type: String, required: true, min: 6, max: 255 },
    hospitalName: { type: String, required: true, min: 6, max: 255 },
    hospitalAddress: { type: String, required: true, min: 6, max: 255 },
    specialization: { type: String, required: true, min: 6, max: 255 },
    fees: { type: Number, default: 0 },
    city: { type: String, required: true, min: 6, max: 255 },
    state: { type: String, required: true, min: 6, max: 255 },
    country: { type: String, required: true, min: 6, max: 255 },
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ["Point"], // 'location.type' must be 'Point'
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    updated: { type: Number, default: Date.now },
    created: { type: Number, default: Date.now },
  },
  { strict: false }
);

doctorSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Doctor", doctorSchema);
