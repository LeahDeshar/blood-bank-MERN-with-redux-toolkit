const express = require("express");
const { registerController, loginController } = require("../controllers/authController");

const router = express.Router();

// REGISTER
router.route("/register").post(registerController)

// LOGIN
router.route("/login").post(loginController)
module.exports = router;