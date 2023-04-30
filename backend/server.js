const express = require("express");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const app = express();
const PORT = 5000;
// Routes
app.use("/api/", authRoutes);
app.use("/api", dashboardRoutes);
app.listen(PORT, () => {
  console.log(`Your server is running on port number ${PORT}`);
});
