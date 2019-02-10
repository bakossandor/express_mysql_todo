const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "todo"
})

module.exports = {
    create_todo(req, res) {
        const { user_id, item } = req.body
        connection.query(`INSERT INTO todo_list(user_id, item) VALUES("${user_id}", "${item}")`, (err, result) => {
            if (err) {
                res.status(400).send({"error": "could not create the item"})
            } else {
                res.status(201).send({"msg": "item created"})
            }
        })
    },

    get_todos(req, res) {
        const user_id = req.params.id
        connection.query(`SELECT * FROM todo_list WHERE user_id = "${user_id}"`, (err, result) => {
            if (err) {
                res.status(400).send({"error": "could not get the user items"})
            } else {
                res.send(result)
            }
        })
    }
}