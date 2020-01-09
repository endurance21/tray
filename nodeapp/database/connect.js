const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Iamhappy2018@",
    database: "tray"
});

module.exports  = db