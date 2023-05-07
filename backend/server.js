const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const { connection } = require("./config/db");
const app = express();
const PORT = 5001;
// database connection
connection();
// middlewars
app.use(express.json());
// Routes
app.use("/api/", authRoutes);
app.use("/api", dashboardRoutes);
app.listen(PORT, () => {
  console.log(`Your server is running on port number ${PORT}`);
});
