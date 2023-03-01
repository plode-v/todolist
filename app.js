const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

mongoose.connection('')

app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", 'ejs');
express.static('/css')



app.listen(3000, () => {
    console.log("server has started")
})