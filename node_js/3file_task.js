var fs = require("fs");

fs.writeFileSync("node/sort.txt","50 -1 99 88 77 66 55 44 33 22");
data = fs.readFileSync("node/sort.txt","utf-8");
d = data.split(" ");
d1= d.sort((a,b) => a-b);
console.log(d1)
let arr = []
for(i=0; i<d1.length; i++){
    arr[i] = parseInt(d1[i])
}
console.log(arr)
