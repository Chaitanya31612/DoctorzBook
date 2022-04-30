let mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    },
    slot: {
        type: Number,
        required: true

    },




    updated: { type: Number, default: Date.now },
    created: { type: Number, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
