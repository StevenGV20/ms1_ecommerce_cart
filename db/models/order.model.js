const { Model, DataTypes, Sequelize } = require("sequelize");
const { CUSTOMER_TABLE } = require('./customer.model');

const ORDERS_TABLE = 'orders';

const OrdersSchema = {
  orderId:{
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: "order_id",
    type: DataTypes.INTEGER
  },
  customerId:{
    allowNull: false,
    field: "customer_id",
    type: DataTypes.INTEGER,
    references:{
      model: CUSTOMER_TABLE,
      key: 'customer_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
  static associate(models){
    this.belongsTo(models.Customer,{
      as: "customer",
      foreignKey: 'customerId',
    });
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
