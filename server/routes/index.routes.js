const express = require("express");
const validation = require("../utils/validation");
const { validate, Joi } = require("express-validation");

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
const commonController = require("../controllers/common");
const bookingController = require("../controllers/booking");

const router = express.Router();

router.get("/check", (req, res) => {
  return res.json({ message: "API is working" });
});

router.get(
  "/auth",
  authController.authenticateMiddleware,
  authController.getLoginDetails
);

// auth
router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/getDoctors", commonController.getDoctors);

router.get("/getDoctor/:id", commonController.getDoctor);

router.get("/getBooking/:id", bookingController.getBooking);

router.post(
  "/bookSlot",
  authController.authenticateMiddleware,
  bookingController.bookSlot
);

module.exports = router;
