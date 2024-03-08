const { Pool } = require("pg")

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres2024",
  database: 'ecommerce_cart_db'
});
await pool.connect();

module.exports = pool;
