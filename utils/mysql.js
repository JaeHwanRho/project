const mysql = require('mysql2/promise');
require('dotenv').config();

const pool_3 = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_3
})

module.exports = pool_3
