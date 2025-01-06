const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const config = require("./config.json")
const productsRoutes = require("./routes/products")

const app = express()

// setting headers to avoid CORS errors
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    next()
});
//app.use(bodyParser.urlencoded({ extended: false }))  used for forms;
app.use(bodyParser.json());
app.use(productsRoutes)

// 500 Error handling
app.use((error, req, res, next) => {
    res.status("500");
    res.send({
        message: "internal server error"
    });
});

mongoose.connect(config.mongoUri)
    .then(() => app.listen(config.port))
    .catch(err => console.log(err))