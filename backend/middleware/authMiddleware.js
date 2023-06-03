const jwt = require("jsonwebtoken");
module.exports.authMiddleware = (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization;
      jwt.verify(token, process.env.SECRET_KEY);
      next();
    } catch (error) {
      // Invalid or expired token
      return res.status(401).json({ error: error.message });
    }
  } else {
    // user unauthorized
    return res.status(401).json({ msg: "Please provide authorization token" });
  }
};
