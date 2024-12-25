const express = require("express")
const mongoose = require("mongoose")

const config = require("./config.json")
const productsRoutes = require("./routes/products")

const app = express()

app.use(productsRoutes)

mongoose.connect(config.mongoUri)
    .then(() => app.listen(config.port))
    .catch(err => console.log(err))