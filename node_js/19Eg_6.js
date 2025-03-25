// Eg-6 => Write node js script and json to perform below tasks. 
// 1.	Write below object in txt file named s2.txt
// {d:{a:10,b:20,c:[30,10]}}
// 2.	Read data from the same file and perform the below tasks.
// a.	addition of a and b.
// b.	subtraction of 2nd element of c and b. (Must be positive value)
// c.	multiplication of elements of c.
// 3.	Add the Output of addition, subtraction and multiplication below the object in s2.txt file.

var s = {d:{a:10,b:20,c:[30,10]}}

var fs = require("fs");
fs.writeFileSync("19s.txt", JSON.stringify(s));
var data = fs.readFileSync("19s.txt", "utf-8");
var d1 = JSON.parse(data);
var add = d1.d.a + d1.d.b;
var sub = Math.abs(d1.d.c[1] - d1.d.b);
var mul = d1.d.c[0] * d1.d.c[1];

fs.appendFileSync("19s.txt", "\nAddition: "+ add + "\nSubstraction: "+ sub + "\nMultiplication: " + mul)