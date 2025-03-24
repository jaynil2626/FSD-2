// Write a Node.js script that asynchronously writes data to a file named 'test1.js'.
// If no error occurs during the writing process, the script should then append additional data to the same file. 
// Finally, it should read the content of the file, including the newly written and appended data, and display it in the console.


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