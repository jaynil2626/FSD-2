const eventemitter = require("events");
const { addListener } = require("process");
const ee = new eventemitter();

ee.on("start", ()=>{
    console.log("event started")
})

ee.on("end", ()=>{
    console.log("started again")
})

ee.addListener("end", ()=>{
    console.log("started third time")
    ee.emit("start")
})
// addListener also do same work as ee.on 

console.log("hello");
ee.emit("start");
console.log("test");
ee.emit("end")