var http = require('http');
var url = require('url');
http.createServer((req,res)=>{
    res.writeHead(200, {"Content-type":"text/html"});
    var q = url.parse(req.url, true).query;
    var add = parseInt(q.a) + parseInt(q.b);
    res.end(add.toString()+ " is addition");
}).listen(8034);