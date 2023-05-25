const { body } = require("express-validator");
module.exports.registerValidations = [
  body("name").not().isEmpty().trim().withMessage("name is required"),
  body("email").not().isEmpty().trim().withMessage("email is required"),
  body("password")
    .isLength({ min: 6, max: 50 })
    .trim()
    .withMessage("password should be 6 characters long"),
];
