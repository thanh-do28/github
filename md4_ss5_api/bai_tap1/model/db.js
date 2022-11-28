const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "Yeulam0909",
  database: "feedback_schema",
});
module.exports = pool.promise();