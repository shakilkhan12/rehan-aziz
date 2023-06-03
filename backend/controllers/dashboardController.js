module.exports.dashboard = (req, res) => {
  return res.status(200).json({ msg: "Welcome to dashboard" });
};
module.exports.profile = (req, res) => {
  return res.status(200).json({ msg: "Welcome to profile" });
};
