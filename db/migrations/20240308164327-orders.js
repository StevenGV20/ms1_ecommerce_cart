'use strict';

const { OrdersSchema, ORDERS_TABLE } = require("./../models/order.model");
const { CustomerSchema, CUSTOMER_TABLE } = require("./../models/customer.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CUSTOMER_TABLE,CustomerSchema);
    await queryInterface.createTable(ORDERS_TABLE,OrdersSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDERS_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
