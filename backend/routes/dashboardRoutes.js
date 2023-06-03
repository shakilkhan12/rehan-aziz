// const express = require("express");
const { Router } = require("express");
const { dashboard, profile } = require("../controllers/dashboardController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = Router();
router.get("/dashboard", authMiddleware, dashboard);
router.get("/profile", authMiddleware, profile);
module.exports = router;
