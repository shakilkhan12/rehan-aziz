const { validationResult } = require("express-validator");
const PostModel = require("../models/Post");

module.exports.createPost = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    // Validations passed
    try {
      // Get data from req.body
      const { title, description, user } = req.body;
      // Create new post
      const createdPost = await PostModel.create({ title, description, user });
      return res
        .status(201)
        .json({ post: createdPost, msg: "Post has been created" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    // Validation failed
    return res.status(400).json({ errors: errors.array() });
  }
};
