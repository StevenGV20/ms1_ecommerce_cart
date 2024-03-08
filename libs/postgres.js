const {Client} = require("pg")

async function getConnection(){
  const client = new Client({
    host: "localhost",
    port: 5432,
    customer: "postgres",
    password: "postgres2024",
    database: 'ecommerce_cart_db'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
