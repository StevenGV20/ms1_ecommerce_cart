const { Model, DataTypes, Sequelize } = require("sequelize");

const ORDER_ITEM_TABLE = 'orders_items';

const OrderItemsSchema = {
  orderId:{
    allowNull: false,
    field: "order_id",
    type: DataTypes.INTEGER,
    foreignKey: true
  },
  productId:{
    allowNull: false,
    field: "product_id",
    type: DataTypes.INTEGER
  },
  quantity:{
    allowNull: false,
    type: DataTypes.INTEGER
  },
  totalAmount:{
    allowNull: false,
    field: "total_amount",
    type: DataTypes.INTEGER
  }
}



class OrderItems extends Model{
  static associate(models){
    this.belongsTo(models.Product, {foreignKey: "product_id", targetKey:"productId"});
    this.belongsTo(models.Orders, {foreignKey: "order_Id", targetKey:"orderId"});
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ORDER_ITEM_TABLE,
      modelName: "OrderItem",
      timestamps: false
    }
  }

}

module.exports = { ORDER_ITEM_TABLE, OrderItemsSchema, OrderItems};
