const jwt = require("jsonwebtoken");
require("dotenv").config();
const isAuthenticated = (req, res, next) => {
  if (!req.headers["authorization"]) {
    return res.status(403).send({ message: "Token is Required" });
  }
  try {
    const decode = jwt.verify(
      req.headers["authorization"],
      process.env.SECERT_KEY
    );
    next();
  } catch (error) {
    return res.status(403).send({ message: "Token is Invalid or expired" });
  }
};
module.exports = { isAuthenticated };
