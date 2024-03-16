const express = require("express");
const { validateDbId } = require("../middleware/middleware");

const router = express.Router();
const {
  getEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
} = require("../controlers/employee");
const { registerUser, loginUser, getAllusers } = require("../controlers/user");
const {
  userRegisterValidation,
  userLoginValidator,
} = require("../utils/uservalidation");
const { isAuthenticated } = require("../utils/auth");

// Employee Routes
router.get("/api/employee", getEmployees);
router.post("/api/employee", createEmployee);
router.get("/api/employee/:id", validateDbId, getEmployeeById);
router.put("/api/employee/:id", validateDbId, updateEmployeeById);
router.delete("/api/employee/:id", validateDbId, deleteEmployeeById);

// Users Routes
router.post("/api/register", userRegisterValidation, registerUser);
router.post("/api/login", userLoginValidator, loginUser);
router.post("/api/user", isAuthenticated, getAllusers);

module.exports = router;
