const { Model, DataTypes, Sequelize } = require("sequelize");

const ORDERS_TABLE = 'orders';

const OrdersSchema = {
  orderId:{
    allowNull: false,
    primaryKey: true,
    field: "order_id",
    type: DataTypes.INTEGER
  },
  userId:{
    allowNull: false,
    field: "user_id",
    type: DataTypes.INTEGER
  },
  status:{
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW
  }
}


class Orders extends Model{
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ORDERS_TABLE,
      modelName: "Order",
      timestamps: false
    }
  }
}

module.exports = { ORDERS_TABLE, OrdersSchema, Orders};
