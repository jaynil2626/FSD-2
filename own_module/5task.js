var PrimeNumber = require("./5task_logic.js")
for (i = 2; i <= 50; i++) {
    let x = PrimeNumber(i);
    if (x == true) {
        console.log(i + " Prime Number");
    }
    else {
        console.log(i + " Not a Prime Number")
    }
}
