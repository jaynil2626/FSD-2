const express = require('express');
const app = express();
const cp = require('cookie-parser');

app.use(cp());
app.use(express.static(__dirname, {index:'12.html'}));
app.get("/submit", (req,res) => {
    var{un,eid,msg,rating} = req.query;
    var feedback = {un,eid,msg,rating};
    res.cookie('feedback',feedback,{maxAge:10000});
    res.send(`<h1> Thank You! </h1>
        <a href="/details"> Details </a>`);
});

app.get("/details", (req,res) => {
    var fb = req.cookies.feedback;
    if(fb){
        res.send(`<h1> Name: ${fb.un}
            Email: ${fb.eid}
            Message: ${fb.msg}
            Rating: ${fb.rating} </h1>`)
    }
    else{
        res.send(`No Feedback Available !!`);
    }
});

app.listen(7003)