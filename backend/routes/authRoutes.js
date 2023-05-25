const express = require("express");
const { register } = require("../controllers/authController");
const { registerValidations } = require("../validations");
const router = express.Router();
router.post("/register", registerValidations, register);
module.exports = router;
