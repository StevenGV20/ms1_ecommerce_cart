const { Product, ProductSchema } = require("./product.model");
const { Orders, OrdersSchema } = require("./order.model");
const { Customer, CustomerSchema } = require("./customer.model");
//const { OrderItems, OrderItemsSchema } = require("./orderItems.model");

function setupModels(sequelize){
  Product.init(ProductSchema, Product.config(sequelize));
  Orders.init(OrdersSchema, Orders.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  //OrderItems.init(OrderItemsSchema,OrderItems.config(sequelize));
}

module.exports = setupModels;
