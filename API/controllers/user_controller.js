const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "todo"
})

module.exports = {
    reg_user(req, res) {
        
        const { user_name, user_password } = req.body
        connection.query(`INSERT INTO users(user_name, user_password) VALUES("${user_name}", "${user_password}")`, (err, result) => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    res.status(409).send({"msg": `${user_name} as username is taken`})
                } else {
                    res.status(400).send({"error": "BAD REQUEST"})
                }
            } else {
                res.status(201).send({"mgs": `${user_name} user has successfully registered`})
            }
        })
    },

    login_user(req, res) {
        const { user_name, user_password } = req.body
        connection.query(`SELECT * FROM users WHERE user_name = "${user_name}" AND user_password = "${user_password}";`, (err, result) => {
            if (err) {
                console.log("logged err ---------- ", err)
            } else {
                if (result.length === 0) {
                    res.status(401).send({"error": "wrond credentials"})
                } else {
                    res.send({"msg": "successfull login"})
                }
            }
        })
    },
}