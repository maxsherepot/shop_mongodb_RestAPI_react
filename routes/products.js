const express = require("express")
const productsController = require("../controllers/products")
const { body } = require("express-validator")

const router = express.Router()

router.get("/products", productsController.getProducts)

router.post("/add-product", [
    body("title")
        .trim()
        .isLength({ min: 3 })
        .withMessage("Minimum 3 characters required"),
    body("price")
        .notEmpty()
        .withMessage("Cannot be empty"),
    body("description")
        .trim()
        .isLength({ min: 5 })
        .withMessage("Minimum 5 characters required"),
    body("imageUrl")
        .notEmpty()
        .withMessage("Cannot be empty"),
], productsController.addProduct)

router.get("/product/:id", productsController.getProduct)

router.put("/product/:id", productsController.updateProduct)

router.delete("/product/:id", productsController.deleteProduct)

module.exports = router