const express = require('express');
const app = express();
const cp = require('cookie-parser');

app.use(cp());
app.get('/cp', (req,res) => {
    res.cookie('name', 'Express 3s');
    res.cookie('id','2', {expires: new Date(Date.now()+7000)});
    res.cookie('topic','cookie', {maxAge:15000});
    res.cookie('branch','cse');
    res.cookie('city','ahmedabad');
    res.clearCookie('branch');
    res.send(req.cookie);
})
app.listen(7003)