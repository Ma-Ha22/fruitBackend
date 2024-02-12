const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const contentRoute = require("./routes/contentRoute");


mongoose.connect('mongodb://127.0.0.1:27017/Shop').then(function (data) {
    console.log("connected")
}).catch(err => {
    console.log(err)
});
app.use(express.json());
const cors = require('cors');
app.use(cors());
const compression = require("compression");
app.use(compression());
app.use(express.urlencoded({ extended: true }));

app.use("/api/Products", productRoute);
app.use("/api/Content", contentRoute);



app.listen(5000, () => {
    console.log("server is  running");
})
