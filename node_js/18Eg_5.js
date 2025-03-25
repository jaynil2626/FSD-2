// Eg-5 => Create JSON object which contains array of objects. Calculate perimeter of square and perimeter of circle by using side value and diameter value respectively. Write object as well as perimeter values of square and circle in shape.txt file.

const shape = 
    [
        {
            name: "circle",
            diameter: 8
        },
        {
            name: "square",
            side: 10
        }
    ] 


var fs = require('fs');
fs.writeFileSync("18shape.txt", JSON.stringify(shape));
var sp = shape[1].side*4;
var cp = shape[0].diameter/2*3.14*2;
fs.appendFileSync("18shape.txt", "\nPerimeter of square is "+ sp + "\nPerimeter of circle is "+ cp);
console.log("Square Perimeter: "+sp +"\nCircle perimeter: "+cp)
