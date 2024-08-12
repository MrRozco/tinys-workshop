// Used to connect to the database
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.MT_USERNAME,
  host: process.env.MT_HOST,
  database: process.env.MT_DATABASE,
  password: process.env.MT_PASSWORD,
  port: process.env.MT_PORT,
});

module.exports = pool;