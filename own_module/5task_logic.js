// Write all necessary js files to create module having a function to check numbers
// from 2 to 50 are prime number or not.

const PrimeNo = (num) => {
    let temp = 0
    for (let i = 2; i < num; i++) {
        if (num % i == 0) { temp++; }
    }
    if (temp == 0) { return true; }
    else { return false; }
}
module.exports = PrimeNo;