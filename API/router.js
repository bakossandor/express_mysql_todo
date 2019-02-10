const user_controller = require("./controllers/user_controller")

module.exports = (app) => {

    app.get("/",  (req, res) => {
        res.send("home page")
    })
    
    app.post("/login", user_controller.login_user)
    
    app.get("/login", (req, res) => {
        res.send("login request")
    })
    
    app.post("/register", user_controller.reg_user)
    
    app.get("/register", (req, res) => {
        res.send("login request")
    })
    
    app.get("/list", (req, res) => {
        res.send("todo list")
    })
    
    app.post("/list", (req, res) => {
        res.send("todo list")
    })
    
    app.put("/list", (req, res) => {
        res.send("update todo list")
    })
    
    app.delete("/list", (req, res) => {
        res.send("delete todo list")
    })
}