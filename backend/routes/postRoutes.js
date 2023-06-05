const { Router } = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const { createPost, getPosts } = require("../controllers/postController");
const { postValidations } = require("../validations");
const router = Router();
router.post("/create-post", [authMiddleware, postValidations], createPost);
router.get("/get-posts", authMiddleware, getPosts);
module.exports = router;
