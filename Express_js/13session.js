const express = require("express");
const app = express();
const es = require("express-session");

app.use(es({
    secret : ' LJU123'
}));

app.get("/test", (req,res) =>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`<h1 style="color:red"> You have visited ${req.session.page_views} times </h1>
             <input type="button" value="dec" onclick="clk()">`);
    }
    else{
        req.session.page_views = 1;
        res.send(`<h1 style="color:blue"> Thanks for visiting !!`)
    }

    function clk(){
        var d = req.session.page_views--;
        res.end(`<h1 style="color:red"> You have visited ${d} times </h1>`)
     }
    
    
});

// app.get("/dec", (req,res) =>{
//     req.session.page_views--;
//     res.send(`<h1 style="color:red"> You have visited ${req.session.page_views} times </h1>
//         <form action="/dec">
//             <button type="submit">dec</button>
//         </form>`);

// app.get("/dec", (req, res) => {
//     if (req.session.page_views && req.session.page_views > 1) {
//         req.session.page_views--;
//     } else {
//         req.session.page_views++;
//     }
//     res.send(`<h1 style="color:red"> You have visited ${req.session.page_views} times </h1>`);
// })


app.listen(7004)