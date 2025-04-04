const eventemitter = require("events");
const ee = new eventemitter();
var fs = require("fs");

ee.on("write", ()=>{
    fs.writeFile("32.txt", "Hello", (e)=>{
        if(e) {console.log(e)}
        else {console.log("Written");}
    })
    ee.emit("append")
})

ee.on("append", ()=>{
    fs.appendFile("32.txt", "\nWorld", (e)=>{
        if(e) {console.log(e)}
        else {console.log("Appended")}
    })
    ee.emit("read");
})

ee.on("read", ()=>{
    fs.readFile("32.txt", "UTF-8", (e,d)=>{
        if(e) {console.log(e)}
        else {console.log(d)}
    })
})
ee.emit("write");