const express = require("express");
const app = express()

app.set("view engine","pug")

app.get('/',(req,res)=>{
    res.render(__dirname + "/14")
})

app.listen(7004)