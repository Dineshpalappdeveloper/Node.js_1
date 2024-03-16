const joi = require("joi");

const userRegisterValidation = (req, res, next) => {
  const schema = joi.object({
    fullname: joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(50).required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: "bad request", error: error });
  }
  next();
};

const userLoginValidator = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).max(50).alphanum().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: "bad request", error: error });
  }
  next();
};
module.exports = { userRegisterValidation, userLoginValidator };
