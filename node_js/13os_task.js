//write node js script to create folder named aa in tmp folder , create file named tmp.txt inside aa named folder now check if memoery is greater then 1 gb then print sufficient memory else print insufficient memory

var fs = require('fs');
var os = require('os');
var temp = os.tmpdir();
var fm = os.freemem()/1024/1024/1024;
console.log(fm)
fs.mkdirSync(temp + "/aa");
if( fm>1 ){
    fs.writeFileSync(temp + "/aa/temp.txt", 'sufficient memory');
}
else{
    fs.writeFileSync(temp + "/aa/temp.txt",'insufficient memory')
}