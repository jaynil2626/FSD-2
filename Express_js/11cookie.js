const express = require('express');
const app = express();
const cp = require('cookie-parser');

app.use(cp());
app.use(express.static(__dirname, {index:'11cookie.html'}));
app.get('/next', (req,res) => {
    res.cookie('fname', req.query.fn);
    res.cookie('lname', req.query.ln);
    res.cookie('pass', req.query.ps);
    res.redirect('/admin');
});
app.get('/admin', (req,res) => {
    res.clearCookie('lname');
    res.send(`Welcome ${req.cookies.fname} ${req.cookies.lname} Password is: ${req.cookies.pass}`);
});
app.listen(7003)