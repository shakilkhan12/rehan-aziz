module.exports.register = (req, res) => {
  const { name, email, password } = req.body;
  return res.status(200).json({ data: { name, email, password } });
};
