const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
// login function
module.exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const { email, password } = req.body;
      // find user in the database
      const user = await UserModel.findOne({ email });
      if (user) {
        //  match password
        const matched = await bcrypt.compare(password, user.password);
        if (matched) {
          // create token
          const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
            expiresIn: "1d",
          });
          return res
            .status(200)
            .json({ token, msg: "Logged in successfully", userId: user._id });
        } else {
          // Invalid password
          return res.status(400).json({ error: "Invalid password" });
        }
      } else {
        // User/Email not found
        return res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    // Validations failed
    return res.status(400).json({ errors: errors.array() });
  }
};
