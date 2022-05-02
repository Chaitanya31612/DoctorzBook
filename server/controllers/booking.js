const User = require("../models/User");
const utility = require("../utils/utility");
let jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctors");
const Booking = require("../models/Booking");
const { ObjectID } = require("mongodb");

/**
 * /api/getBookings
 */
module.exports.getBookings = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server error");
  }
};

/**
 * /api/getBooking/:id
 */
module.exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.find({
      doctor_id: new ObjectID(req.params.id),
    }).select("-user_id -doctor_id -updated -created");
    if (!booking) {
      return res.json();
    }

    bookHashs = [];
    booking.forEach((booking) => {
      bookHashs.push(
        utility.hashDate(booking.bookingDate, booking.start, booking.end)
      );
    });

    res.json(bookHashs);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Booking not found" });
    }
    res.status(500).send("Server error");
  }
};

/* original retrieval */
// module.exports.getBooking = async (req, res) => {
//   try {
//     const booking = await Booking.find({
//       doctor_id: new ObjectID(req.params.id),
//     }).select("-user_id -doctor_id -updated -created");
//     if (!booking) {
//       return res.json();
//     }
//     res.json(booking);
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind == "ObjectId") {
//       return res.status(400).json({ msg: "Booking not found" });
//     }
//     res.status(500).send("Server error");
//   }
// };

/**
 * /api/bookSlot
 */
module.exports.bookSlot = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      user_id: req.decoded.id,
      doctor_id: req.body.doctor_id,
      bookingDate: req.body.bookingDate,
      start: req.body.start,
      end: req.body.end,
    });
    if (booking) {
      return res
        .status(400)
        .json({ status: false, msg: "Slot already booked" });
    }

    const newBooking = new Booking({
      user_id: req.decoded.id,
      doctor_id: req.body.doctor_id,
      bookingDate: req.body.bookingDate,
      start: req.body.start,
      end: req.body.end,
    });
    const bookingData = await newBooking.save();
    console.log([bookingData]);
    res.json([bookingData]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
