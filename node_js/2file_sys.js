var fs = require("fs");

//fs.mkdirSync("node");

fs.writeFileSync("node/rw.txt","Hello world");

fs.appendFileSync("node/rw.txt","\n how are you all ?");

data = fs.readFileSync("node/rw.txt")
console.log(data)   // returns encoded buffer code format


data = fs.readFileSync("node/rw.txt","utf-8")
console.log(data)
// OR
data = fs.readFileSync("node/rw.txt")
console.log(data.toString())


fs.renameSync("node/rw.txt","node/write.txt")
fs.writeFileSync("node/write.txt","test");
//fs.unlinkSync("node/write.txt");