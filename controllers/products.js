const Product = require("../models/product")

exports.getProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            res.send(products)
        })
        .catch(err => {
            console.log(err)
        })
}