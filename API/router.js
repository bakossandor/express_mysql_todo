const user_controller = require("./controllers/user_controller")
const todo_controller = require("./controllers/todo_controller")
const express = require("express")

module.exports = (app) => {

    // app.get("/",  (req, res) => {
    //     res.send("home page")
    // })
    
    app.post("/login", user_controller.login_user)
    
    // app.get("/login", (req, res) => {
        
    // })
    
    app.post("/register", user_controller.reg_user)
    
    // app.get("/register", (req, res) => {
    //     res.send("login request")
    // })
    
    app.get("/list/:id", todo_controller.get_todos)
    
    app.post("/list", todo_controller.create_todo)
    
    // app.put("/list", (req, res) => {
    //     res.send("update todo list")
    // })
    
    // app.delete("/list", (req, res) => {
    //     res.send("delete todo list")
    // })
}