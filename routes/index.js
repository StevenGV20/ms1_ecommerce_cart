const express = require("express");

const ordersRouter = require("./orders.router");
const productsRouter = require("./product.router");

function routerApi(app){
  const router = express.Router()
  app.use("/api/v1",router);
  router.use("/orders",ordersRouter);
  router.use("/products",productsRouter);
}

module.exports = routerApi;
