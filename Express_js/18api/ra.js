const express = require("express")
const app = express()
const api = require("./ra1")

app.use("/studentdata", api)
app.listen(7001)