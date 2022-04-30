const express = require("express");
const validate = require("express-validation");

// Controllers
const authController = require("../controllers/auth");

const router = express.Router();

router.get("/check", (req, res) => {
  return res.json({ message: "API is working" });
});

// auth
router.post("/register", authController.register);

module.exports = router;
