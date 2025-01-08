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

//TODO Add validation
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

exports.getProduct = (req, res, next) => {
    const productId = req.params.id

    Product.findById(productId)
        .then(product => {
            if (!product) {
                //TODO Add error handling
                throw new Error()
            }
            res.status(200)
            res.json(product)
        })
}

exports.updateProduct = (req, res, next) => {
    const { title, price, description, imageUrl } = req.body;
    const productId = req.params.id

    Product.findById(productId)
        .then(product => {
            if (!product) {
                throw new Error()
            }
            product.title = title;
            product.imageUrl = imageUrl;
            product.price = price;
            product.description = description;

            product.save()
                .then(() => {
                    res.status(200)
                    res.json(product)
                })
                .catch(() => {
                    throw new Error()
                })
        })
        .catch(() => {
            throw new Error()
        })
}