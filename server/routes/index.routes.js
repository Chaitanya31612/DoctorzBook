const express = require("express");
const validation = require("../utils/validation");
const { validate, Joi } = require("express-validation");
const { newBooking } = require("../controllers/bookingController");
const loginValidation = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
};

const registerValidation = {
  body: Joi.object({
    name: Joi.string().min(1).max(60).trim().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
};

// Controllers
const authController = require("../controllers/auth");

const router = express.Router();

router.get("/check", (req, res) => {
  return res.json({ message: "API is working" });
});

// auth
router.post("/register", validate(registerValidation), authController.register);

router.post("/login", authController.login);

router.route("/booking").put(isAuthenticatedUser, newbooking);

module.exports = router;
