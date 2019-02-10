const express = require("express")
const bodyParser = require("body-parser")

const router = require("./router")

const app = express()
app.use(bodyParser.json())
router(app)

const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))