var fs = require("fs");

fs.writeFileSync("node/source.txt","Hello world")
data = fs.readFileSync("node/source.txt","utf-8")

fs.writeFileSync("node/dest.txt", data)
fs.appendFileSync("node/dest.txt","/nHow are you ?")