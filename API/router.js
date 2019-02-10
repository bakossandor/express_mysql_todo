const express = require("express")
const router = express.Router()

router.get("/",  (req, res) => {
    res.send("home page")
})

router.get("/login", (req, res) => {
    res.send("login page")
})

router.post("/login", (req, res) => {
    res.send("login request")
})

router.get("/register", (req, res) => {
    res.send("register page")
})

router.post("/register", (req, res) => {
    res.send("login request")
})

router.get("/list", (req, res) => {
    res.send("todo list")
})

router.post("/list", (req, res) => {
    res.send("todo list")
})

router.put("/list", (req, res) => {
    res.send("update todo list")
})

router.delete("/list", (req, res) => {
    res.send("delete todo list")
})


module.exports = router