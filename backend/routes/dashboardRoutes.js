// const express = require("express");
const { Router } = require("express");
const { users } = require("../controllers/dashboardController");
const router = Router();
router.get("/users/:id/:name/:email", users);
module.exports = router;
