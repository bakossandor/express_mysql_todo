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
    },

    delete_todo(req, res) {
        const { _id } = req.body
        connection.query(`DELETE FROM todo_list WHERE _id = "${_id}"`, (err, result) => {
            if (err) {
                res.status(400).send({"error": "could not delete the item"})
            } else {
                res.status(201).send({"msg": "item deleted"})
            }
        })
    },

    update_todo(req, res) {
        const { _id, item, status, user_id, parent_id, color_code } = req.body
        connection.query(
            `UPDATE Todo_list SET item = "${item}", status = "${status}", ${parent_id === "NULL" ? "parent_id = NULL" : "parent_id = " + parent_id}, color_code = "${color_code}" WHERE _id = ${_id}`, 
            (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(400).send({"error": `could not update ${_id} - ${item}`})
                } else {
                    res.send({"msg": `item ${_id} - ${item} - updated`})
                }
        })
    }
}