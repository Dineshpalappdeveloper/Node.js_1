const mongoose = require("mongoose");
const { employeeModel } = require("../models/employeeModel");
const { raiseRecord404Error } = require("../middleware/middleware");
const ObjectId = require("mongoose").Types.ObjectId;
const getEmployees = async (req, res, next) => {
  try {
    employeeModel
      .find()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send({ error: err }));
  } catch (error) {
    res.status(400).send({ error: error });
    next(error);
  }
};
const createEmployee = async (req, res) => {
  try {
    console.log(req.body, "222");
    employeeModel.create(req.body);
    res.status(201).send({ message: "employee created", data: req.body });
  } catch (error) {
    res.status(400).send({ error: error });
  }
};
const getEmployeeById = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id) == false) {
      // checking given id is valid acc to mongodb or not
      res.send({ error: "given id is not valid" });
    } else {
      let id = req.params.id;

      await employeeModel
        .findById(id)
        .then((data) => {
          if (data) {
            res.status(200).send({ data: data });
          } else {
            raiseRecord404Error(req, res);
          }
        })
        .catch((err) => res.status(400).send({ error: "Data not found" }));
    }
  } catch (error) {
    res.status(400).send({ error: error });
  }
};
const updateEmployeeById = async (req, res) => {
  try {
    let id = req.params.id;
    await employeeModel.findByIdAndUpdate(id, req.body, { new: true });
    res
      .status(200)
      .send({ message: "Data Updated successfully", data: req.body });
  } catch (error) {
    res.status(400).send({ error: error });
  }
};
const deleteEmployeeById = async (req, res) => {
  try {
    let id = req.params.id;
    await employeeModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Data deleted Successsfully" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
};
module.exports = {
  getEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
};
