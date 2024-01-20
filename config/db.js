import mysql from "mysql2";

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movie',
});
 export  default  connection;