var http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"});
    res.write(req.url);
    res.end("  url fetched !!");
}).listen(5015);
