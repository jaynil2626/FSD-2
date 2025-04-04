const eventemitter = require("events");
const ee = new eventemitter();

ee.on("start", (a,b)=>{
    console.log("Multiplication is "+ a*b);
    console.log("Event completed");
    ee.emit("end");
})

ee.on("end", ()=>{
    console.log("Ended")
})

ee.emit("start", 3, 2)