const User = require("../models/User");
const utility = require("../utils/utility");
let jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctors");

/**
 * /api/getDoctors
 */
module.exports.getDoctors = async (req, res) => {
  try {
    console.log(req.decoded);
    const doctors = await Doctor.find();
    console.log("doctors", doctors);
    res.status(200).json(doctors);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};
