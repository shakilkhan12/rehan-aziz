const express = require("express");
const { register, login } = require("../controllers/authController");
const { registerValidations, loginValidations } = require("../validations");
const router = express.Router();
router.post("/register", registerValidations, register);
router.post("/login", loginValidations, login);
module.exports = router;
