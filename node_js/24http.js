var http = require("http");
var server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.writeHead("200", {"Content-type":"text/html"});
        res.write("<h1> Welcome to my page </h1>  <ul><li><a href='/'> Home </a></li>  <li><a href='/about'> About </a></li></ul>");
        res.end();
    }
    else if(req.url == "/about"){
        res.writeHead("200", {"content-type":"text/html"});
        res.end("<h2> About us </h2>");
    }
    else{
        res.writeHead("404",{"content-type":"text/html"});
        res.end("<h2> Page not found!! </h2>");
    }
})

server.listen(5004)