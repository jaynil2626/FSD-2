const eventemitter = require("events");
const ee = new eventemitter();

ee.on("findval", (r,s)=>{
    if(r<0){
        console.log("Radius must be positive!!");
    }
    else{
        console.log(2*3.14*r);
    }
    if(s<0){
        console.log("Side must be positive!!");
    }
    else{
        console.log(4*s)
    }
})

ee.emit("findval", 10,3);