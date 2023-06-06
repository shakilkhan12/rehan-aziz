const { Router } = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const {
  createPost,
  getPosts,
  deletePost,
} = require("../controllers/postController");
const { postValidations } = require("../validations");
const router = Router();
router.post("/create-post", [authMiddleware, postValidations], createPost);
router.get("/get-posts", authMiddleware, getPosts);
router.delete("/delete-post/:id", authMiddleware, deletePost);
module.exports = router;
