'use strict';

const { OrderItemsSchema, ORDER_ITEM_TABLE } = require('../models/orderItems.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_ITEM_TABLE,OrderItemsSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_ITEM_TABLE);
  }
};
