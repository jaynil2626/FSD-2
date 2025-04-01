import validator from "validator";
import chalk from "chalk";
let e1 = "test@gmail.com";
console.log(e1 +" email is "+ validator.isEmail(e1));
let n1 = "LJU";
console.log(validator.isLowercase(n1));
let n2 = ""
console.log(validator.isEmpty(n2));


var test = chalk.red.underline.bgYellow("Hello") + chalk.bold.bgRed.italic.yellow("\nyahoo")
console.log(test);
console.log(validator.isLowercase(test),validator.isEmail(test));
