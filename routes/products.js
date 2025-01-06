const express = require("express")
const productsController = require("../controllers/products")

const router = express.Router()

router.get("/products", productsController.getProducts)

router.post("/add-product", productsController.addProduct)

router.get("/product/:id", productsController.getProduct)

module.exports = router