var fs = require("fs");

// // SYNCHRONOUS FILE SYSTEM
// fs.writeFileSync("9fs.txt","hello");
// console.log("Completed Sync")




// ASYNCHRONOUS FILE SYSTEM
fs.writeFile("9fs1.txt","Hi ! Welcome",(err)=>{
    if(err){console.error(err);}
    else{console.log("Written");}
})

fs.appendFile("9fs1.txt","Hiello ! Welcome",(err)=>{
    if(err){console.error(err);}
    else{console.log("Appended");}
})

console.log("Completed Async")