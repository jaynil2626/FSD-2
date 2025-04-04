const EventEmitter = require('events');
var eventEmitter = new EventEmitter();

var fun1 = (msg) => {
 console.log("Message from fun1: " + msg);
};

var fun2 = (msg) => {
 console.log("Message from fun2: " + msg);
};

eventEmitter.on('myEvent1', fun1); 
eventEmitter.on('myEvent2', fun2); 
eventEmitter.on('myEvent1', fun1); 
eventEmitter.on('myEvent2', fun2); 


eventEmitter.removeListener('myEvent2', fun2); 

eventEmitter.removeAllListeners('myEvent1'); 


eventEmitter.emit('myEvent2', "LJ University"); 
eventEmitter.emit('myEvent1', "LJU"); 
