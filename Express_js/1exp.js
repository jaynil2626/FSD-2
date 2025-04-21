const express = require("express");
var app = express();

app.get("/", (req,res) => {
    res.set("content-type", "text/html");
    res.write("<h1> Express Example </h1>")
    res.send();
})
app.get("/about", (req,res) => {
    res.send("<h3> Hello </h3>");
})
app.listen(5004, () => {console.log("Server Started")})