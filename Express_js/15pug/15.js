const express = require("express");
const app = express()

app.set("view engine","pug")

app.get('/',(req,res)=>{
    res.render(__dirname + "/15")
})

app.listen(7004)