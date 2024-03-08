'use strict';

const { ProductSchema, PRODUCT_TABLE} = require("./../models/product.model");
const { OrdersSchema, ORDERS_TABLE } = require("./../models/order.model");
const { UserSchema, USER_TABLE } = require("./../models/user.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCT_TABLE,ProductSchema);
    await queryInterface.createTable(USER_TABLE,UserSchema);
    await queryInterface.createTable(ORDERS_TABLE,OrdersSchema);
    //await queryInterface.addColumn(PRODUCT_TABLE,'name_column',ProductSchema.name_column);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(ORDERS_TABLE);
    //await queryInterface.removeColumn(PRODUCT_TABLE,"name_column");
  }
};
