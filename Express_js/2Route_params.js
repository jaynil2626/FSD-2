var express = require("express");
var app = express();

app.get("/branch/:branch/name/:n", (req,res) => {
    res.send(req.params);
})
app.listen(6004);

// To check: http://localhost:6004/branch/CEA/name/Jaynil