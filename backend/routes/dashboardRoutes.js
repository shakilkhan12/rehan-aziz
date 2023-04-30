// const express = require("express");
const { Router } = require("express");
const router = Router();
router.get("/dashboard", (req, res) => {
  const dashboardData = ["item1", "item2", "item3"];
  return res.status(200).json({ dashboardData });
});
router.get("/posts", (req, res) => {
  const postData = ["post1", "post2", "post3"];
  return res.status(200).json({ postData });
});
module.exports = router;
