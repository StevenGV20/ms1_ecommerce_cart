const express = require("express");

const ordersRouter = require("./orders.router");
const productsRouter = require("./product.router");
const userRouter = require("./user.router");

function routerApi(app){
  const router = express.Router()
  app.use("/api/v1",router);
  router.use("/orders",ordersRouter);
  router.use("/products",productsRouter);
  router.use("/users",userRouter);
}

module.exports = routerApi;
