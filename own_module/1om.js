// METHOD 1

const add = (a,b) => {
    return a+b;
}
module.exports = add

// making of own module and import it in other files

//METHOD 2  for multiple functions
const mul = (a,b) => {
    return a*b;
}

module.exports.a = add
module.exports.m = mul


//METHOD 3
const name = 'lju'
module.exports = {add, mul, name}  //passing functions and variable as a object and thery will be used by their name