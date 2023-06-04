const { body } = require("express-validator");
module.exports.registerValidations = [
  body("name").not().isEmpty().trim().withMessage("name is required"),
  body("email").not().isEmpty().trim().withMessage("email is required"),
  body("password")
    .isLength({ min: 6, max: 50 })
    .withMessage("password should be 6 characters long"),
];
module.exports.loginValidations = [
  body("email").not().isEmpty().trim().withMessage("email is required"),
  body("password").not().isEmpty().withMessage("password is required"),
];
module.exports.postValidations = [
  body("title").not().isEmpty().trim().withMessage("title is required"),
  body("description").not().isEmpty().withMessage("description is required"),
  body("user").not().isEmpty().withMessage("user is required"),
];
