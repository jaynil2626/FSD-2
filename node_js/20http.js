var http = require('http');
var server = http.createServer((req,res)=> {
    //res.writeHead(200, {"Content-type":"text/html"});
    res.write("<h1>Welcome Students</h1>");
    res.write("<ul><li>Test</li> <li>Test1</li></ul>");
    res.write('test')
    res.write("<h3> Hello!!! </h3>")
    res.end();
    //res.end("<h1>Welcome Students</h1>")  can also ended by writing html
});

server.listen(8015, ()=>{
    console.log("Server Started!!");
});