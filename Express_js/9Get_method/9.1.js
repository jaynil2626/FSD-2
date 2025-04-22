// 1.	Write express script to get form data using get method and display data in JSON format in next page named “process_get”
var express = require("express");
var app = express();

app.use(express.static(__dirname, {index:"9.1.html"}));
app.get("/process_get", (req,res)=>{
    res.write(req.query.un);
    var res1 = { uname: req.query.un,
        email: req.query.eid
    }
    res.write(res1.uname + " " + res1.email);
    res.send();
})
app.listen(5010)