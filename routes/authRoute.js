const express = require("express");
const { registerController, loginController, currentUserController } = require("../controllers/authController");
const authMiddleware  =require("../middlewares/authMiddleware")
const router = express.Router();

// REGISTER
router.route("/register").post(registerController)

// LOGIN
router.route("/login").post(loginController)

// GET CURRENT USER

router.get("/current-user",authMiddleware,currentUserController)
module.exports = router;