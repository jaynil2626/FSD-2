const express = require("express")
const app = express();
const path = require("path");

const cp = path.join(__dirname, "../CSS");
const hp = path.join(__dirname, "../HTML");

app.use(express.static(cp));
app.use(express.static(hp, {index: "4.html"}));
app.listen(5007)