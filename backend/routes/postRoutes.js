const { Router } = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const { createPost } = require("../controllers/postController");
const { postValidations } = require("../validations");
const router = Router();
router.post("/create-post", [authMiddleware, postValidations], createPost);
module.exports = router;
