var express = require("express");
var app = express();

var student = {
    "name" : "ABC",
    "age" : 20
}

app.get("/", (req,res) => {
    res.write(JSON.stringify(student.name));
    res.send();
    //OR
    //res.send(student) # it doesn't need stringify in .send()
})

app.get("/json", (req,res) => {
    //res.json(student)
    res.json(student.age)
})

app.listen(5004)