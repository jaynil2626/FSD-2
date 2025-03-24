var fs = require('fs');
fs.writeFile('test1.txt', 'hello', (e)=> {
    if (e) { console.log(e);}
    else{ fs.appendFile('test1.txt',' hi', (e) => {
        if (e) { console.log(e); }
        else{fs.readFile('test1.txt', 'utf-8', (e,d) => {
            if (e) { console.log(e); }
            else{console.log(d)}
        })}
    })}})