const ObjectId = require("mongoose").Types.ObjectId;

const validateDbId = (req, res, next) => {
  if (ObjectId.isValid(req.params.id) == false) {
    // checking given id is valid acc to mongodb or not
    res.status(400).send({ error: `given id ${req.params.id} is not valid` });
  } else {
    next();
  }
};

const raiseRecord404Error = (req, res) => {
  res
    .status(404)
    .send({ error: "No Record with Given Id", _id: req.params.id });
};

const errorHandler = (error, req, res, next) => {
  res.status(500).send({ error: error });
};
module.exports = { validateDbId, raiseRecord404Error, errorHandler };
