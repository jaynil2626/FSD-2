// Method -1
const msg = function(){
    console.log("Hello");
}

setTimeout(msg,5000);

// Method-2
setTimeout(function(){
    console.log("Hello2");
},3000);

//Method-3
setTimeout(() =>{
    console.log("Print");
},2000);