const Product = require("../models/product")

exports.getProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            res.status(200)
            res.json({ products })
        })
        .catch(err => {
            throw new Error()
        })
}

exports.addProduct = (req, res, next) => {
    const { title, price, description, imageUrl } = req.body;
    const newProduct = new Product({ title, price, description, imageUrl })

    newProduct.save()
        .then(product => {
            res.status(201)
            res.json(product)
        })
        .catch(() => {
            throw new Error()
        })
}