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
    const { userType, id } = req.decoded;
    let appointments = [];
    if (userType === "doctor") {
      Booking.find({ doctor_user_id: id })
        .populate("user_id")
        .exec((err, data) => {
          if (err) {
            return res
              .status(400)
              .json({ message: "error occurred", error: err });
          } else {
            console.log(data);
            // format data in appointments
            appointments = data.map((appointment) => {
              return {
                bookingDate: appointment.bookingDate,
                start: appointment.start,
                end: appointment.end,
                name: appointment.user_id.name,
                email: appointment.user_id.email,
              };
            });
            return res.json(appointments);
          }
        });
    } else {
      Booking.find({ user_id: id })
        .populate("doctor_id")
        .exec((err, data) => {
          if (err) {
            return res
              .status(400)
              .json({ message: "error occurred", error: err });
          } else {
            // format data in appointments
            appointments = data.map((appointment) => {
              return {
                bookingDate: appointment.bookingDate,
                start: appointment.start,
                end: appointment.end,
                doctorName: appointment.doctor_id.doctorName,
                specialization: appointment.doctor_id.specialization,
                hospitalName: appointment.doctor_id.hospitalName,
                hospitalAddress: appointment.doctor_id.hospitalAddress,
                city: appointment.doctor_id.city,
                state: appointment.doctor_id.state,
                country: appointment.doctor_id.country,
              };
            });
            return res.json(appointments);
          }
        });
    }
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
    console.log("box", req.body);

    const check = {
      user_id: req.decoded.id,
      doctor_id: req.body.doctor_id,
      doctor_user_id: req.body.doctor_user_id,
      bookingDate: req.body.bookingDate,
      start: req.body.start,
      end: req.body.end,
    };

    console.log("check", check);

    const booking = await Booking.findOne(check);
    if (booking) {
      return res
        .status(400)
        .json({ status: false, msg: "Slot already booked" });
    }

    const newBooking = new Booking(check);
    const bookingData = await newBooking.save();
    console.log([bookingData]);
    res.json([bookingData]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// cancel booking
module.exports.cancelBooking = async (req, res) => {
  try {
    console.log("landed here");
    const check = {
      user_id: req.decoded.id,
      bookingDate: req.body.bookingDate,
      start: req.body.start,
      end: req.body.end,
    };

    // delete booking by check
    const booking = await Booking.findOneAndDelete(check);
    if (!booking) {
      return res.status(400).json({ status: false, msg: "Booking not found" });
    }
    res.json({ status: true, msg: "Booking cancelled" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};
