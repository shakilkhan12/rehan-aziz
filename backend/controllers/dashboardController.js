module.exports.users = (req, res) => {
  //   return res.status(200).json(req.query);
  return res.status(200).json(req.params);
};
