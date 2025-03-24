var fs = require('fs');
var os = require('os');
var plt = os.platform()
var temp = os.tmpdir();

//fs.mkdirSync(temp + "/aaa");
if (plt == 'linux'){
    console.log('You are working on linux.')
    fs.writeFileSync(temp + "/aaa/temp1.txt", 'You are working on linux.');
}
else{ console.log('Sorry! You are not currently in linux.')
    fs.writeFileSync(temp + "/aaa/temp1.txt", 'Sorry! You are not currently in linux.');
}