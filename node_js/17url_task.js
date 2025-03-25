//write node js script to write query string of url in file using callback (async fs)
var url = require("url");
var fs = require('fs');
var addr = "http://localhost:8080/test?year=2025&month=march";
var u = url.parse(addr,true);
var u1 = JSON.stringify(u.query);
fs.writeFile("17u.txt", u1, (e) => {
    if(e) { console.log(e) }
    else { console.log('Written')
        fs.readFile("17u.txt", "utf-8", (e,d)=>{
            if(e){console.log(e)}
            else{ var d1 = JSON.parse(d);
                console.log(d1.year)
            }
        })
    }
})