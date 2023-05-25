const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User");

module.exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      // check email exist or not
      const findEmail = await UserModel.findOne({ email });
      if (!findEmail) {
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await UserModel.create({
          name,
          email,
          password: hashedPassword,
        });
        return res.status(201).json({ msg: "Your account has been created" });
      } else {
        // email is already exist in the database
        return res.status(400).json({ error: "Email is already exist" });
      }
    } catch (error) {
      return res.status(500).json({ error: "server internal error" });
    }
  } else {
    // validation failed
    return res.status(400).json({ errors: errors.array() });
  }
};
