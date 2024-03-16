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

router.get("/api/employee", getEmployees);
router.post("/api/employee", createEmployee);
router.get("/api/employee/:id", validateDbId, getEmployeeById);
router.put("/api/employee/:id", validateDbId, updateEmployeeById);
router.delete("/api/employee/:id", validateDbId, deleteEmployeeById);

module.exports = router;
