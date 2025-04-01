import validator from "validator";
let e1 = "test@gmail.com";
console.log(e1 +" email is "+ validator.isEmail(e1));
let n1 = "LJU";
console.log(validator.isLowercase(n1));
let n2 = ""
console.log(validator.isEmpty(n2));