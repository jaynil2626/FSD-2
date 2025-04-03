//METHOD 1
// importing logic of add from 1om.js

// var data = require("./1om.js")

// console.log(data(5,10))  //by default it will give addition

// console.log(data.m(5,10))   // by doing data.m it will multiply


var {mul, add, name} = require("./1om.js")
console.log(mul(20,50))

console.log(add(2,2))
console.log(name)