'use strict';

const { ProductSchema, PRODUCT_TABLE} = require("./../models/product.model");
const { OrdersSchema, ORDERS_TABLE } = require("./../models/order.model");
const { CustomerSchema, CUSTOMER_TABLE } = require("./../models/customer.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCT_TABLE,ProductSchema);
    await queryInterface.createTable(CUSTOMER_TABLE,CustomerSchema);
    await queryInterface.createTable(ORDERS_TABLE,OrdersSchema);
    //await queryInterface.addColumn(PRODUCT_TABLE,'name_column',ProductSchema.name_column);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(ORDERS_TABLE);
    //await queryInterface.removeColumn(PRODUCT_TABLE,"name_column");
  }
};
