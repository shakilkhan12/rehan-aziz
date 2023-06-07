const { Router } = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const {
  createPost,
  getPosts,
  deletePost,
  updatePost,
} = require("../controllers/postController");
const { postValidations, updatePostValidations } = require("../validations");
const router = Router();
router.post("/create-post", [authMiddleware, postValidations], createPost);
router.get("/get-posts", authMiddleware, getPosts);
router.delete("/delete-post/:id", authMiddleware, deletePost);
router.put("/update-post", [authMiddleware, updatePostValidations], updatePost);
module.exports = router;
