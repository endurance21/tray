const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "XXXXXXXXXX",
    database: "tray"
});

module.exports  = db