const express = require("express");
const app = express();
const PORT = 5000;
// Routes
app.get("/", (req, res) => {
  res.status(200).json({ msg: "This is home route" });
  // request
  // response
});
app.get("/users", (req, res) => {
  const users = ["Rehan", "Aziz", "Shakil"];
  res.status(200).json({ users });
});
app.get("/profile", (req, res) => {
  const profile = {
    name: "Rehan",
    education: "BS Computer Scince",
    Job: "Blockchain Developer in Pakistan",
  };
  return res.status(200).json({ profile });
});
app.listen(PORT, () => {
  console.log(`Your server is running on port number ${PORT}`);
});
