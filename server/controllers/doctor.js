const User = require("../models/User");
const utility = require("../utils/utility");
let jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctors");

/**
 * /api/getDoctors
 */
module.exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    // console.log("doctors", doctors);
    res.status(200).json(doctors);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};

module.exports.getDoctorsSorted = async (req, res) => {
  try {
    const { long, lat } = req.body;
    console.log(long, lat);

    const doctors = await Doctor.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [long, lat],
          },
        },
      },
    });
    // console.log("doctors", doctors);
    res.status(200).json(doctors);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};

module.exports.getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found" });
    }
    res.json(doctor);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Doctor not found" });
    }
    res.status(500).send("Server error");
  }
};

module.exports.getDoctorByUserid = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ user_id: req.decoded.id });

    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found" });
    }
    res.json(doctor);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Doctor not found" });
    }
    res.status(500).send("Server error");
  }
};
