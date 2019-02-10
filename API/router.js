const user_controller = require("./controllers/user_controller")
const todo_controller = require("./controllers/todo_controller")

module.exports = (app) => {

    //SERVING STATIC
    // app.get("/",  (req, res) => {
    //     res.send("home page")
    // })
    
    // app.get("/login", (req, res) => {
        
    // })
    
    // app.get("/register", (req, res) => {
    //     res.send("login request")
    // })
    
    //API

    app.post("/login", user_controller.login_user)

    app.post("/register", user_controller.reg_user)

    app.get("/list/:id", todo_controller.get_todos)
    
    app.post("/list", todo_controller.create_todo)
    
    app.put("/list", todo_controller.update_todo)
    
    app.delete("/list", todo_controller.delete_todo)
}