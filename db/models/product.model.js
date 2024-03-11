const { Model, DataTypes, Sequelize } = require("sequelize");

const PRODUCT_TABLE = 'product';

const ProductSchema = {
  productId:{
    allowNull: false,
    primaryKey: true,
    field: "product_id",
    type: DataTypes.INTEGER
  },
  productName:{
    allowNull: false,
    field: "product_name",
    type: DataTypes.STRING
  }
}

class Product extends Model{
  static associate(models){
    //this.hasMany(models.OrderItem,{as: "OrderItems"});
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: "Product",
      timestamps: false
    }
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product};
