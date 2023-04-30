const express = require("express");
const router = express.Router();
router.get("/test", (req, res) => {
  const testData = ["test1", "test2", "test3"];
  // res.status(200)
  // res.json({data: testData})
  return res.status(200).json({ data: testData });
});
router.get("/profile", (req, res) => {
  const profile = {
    name: "Rehan",
    email: "Rehan@gmail.com",
    location: "Lower dir kodigram",
  };
  return res.status(200).json({ profile });
});
module.exports = router;
