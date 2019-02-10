const express = require("express")
const mysql = require("mysql")

const router = require("./router")

const app = express() // initiating the app as an express instance
app.use(router) // passing the router middleware into the application

const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))