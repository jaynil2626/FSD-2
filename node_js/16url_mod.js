var url = require('url');

var adr = "https://github.com/jaynil2626/FSD-2?year=2017&month=february";
var q = url.parse(adr, true);
console.log(q.hostname);  //returns github.com
console.log(q.pathname);   //returns /jaynil2626/FSD-2
console.log(q.search);   //returns  ?year=2017&month=february
var qdata = q.query;
console.log(qdata.month);    //returns february


if(q.query.year % 4 == 0){
    console.log('leap year');
}
else{
    console.log("Not a leap year");
}