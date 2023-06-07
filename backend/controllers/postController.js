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
module.exports.getPosts = async (req, res) => {
  try {
    // Get all posts of logged in user
    const posts = await PostModel.find({ user: req.user._id }).populate(
      "user",
      "name _id email"
    );
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const user = req.user._id;
  if (!id || id === "" || id === undefined) {
    return res.status(400).json({ error: "id is required" });
  }
  try {
    // delete post
    await PostModel.findOneAndDelete({ $and: [{ _id: id }, { user }] });
    return res.status(200).json({ msg: "Post has been deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports.updatePost = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const { title, description, postId } = req.body;

      const response = await PostModel.findOneAndUpdate(
        {
          $and: [{ _id: postId }, { user: req.user._id }],
        },
        {
          $set: {
            title,
            description,
          },
        }
      );
      return res
        .status(201)
        .json({ msg: "Post has been updateded", post: response });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    // Validations failed
    return res.status(400).json({ errors: errors.array() });
  }
};
