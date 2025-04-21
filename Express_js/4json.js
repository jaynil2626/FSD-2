var express = require("express");
var app = express();

var s = {
            d:[
                {
                    "name" : "A",
                    "id" : 1
                },
                {
                    "name" : "B",
                    "id" : 2
                }
              ]
        }

app.get("/", (req,res) => {
    res.set("content-type", "text/html");
    res.write(`<table border = '1px solid black' 
        <tr><th>Name</th>
        <th> ID </th></tr>`);
    for (i of s.d){
        res.write(`<tr> <td> ${i.name} </td>
            <td> ${i.id} </td> </tr>`)
    }
    res.write(`<table>`);
    res.send();
})
app.listen(5003);