const express = require("express");
const {
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
} = require("../controlers/product");
const router = express.Router();
const { validateDbId } = require("../middleware/middleware");

router.get("/api/product", getAllProduct);
router.get("/api/product/:id", validateDbId, getSingleProduct);
router.put("/api/product/:id", validateDbId, updateSingleProduct);
router.delete("/api/product/:id", validateDbId, deleteProduct);

module.exports = router;
