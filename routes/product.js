const express = require("express")
const { getAllProduct, getSingleProduct } = require("../controlers/product")
const router = express.Router()
router.route("/api/product").get(getAllProduct)
router.route("/:id").get(getSingleProduct)




module.exports = router