const { Model, DataTypes, Sequelize } = require("sequelize");

const CUSTOMER_TABLE = 'customer';

const CustomerSchema = {
  customerId:{
    allowNull: false,
    field: "customer_id",
    type: DataTypes.INTEGER,
    unique: true,
  },
  customerName:{
    allowNull: false,
    field: "customer_name",
    type: DataTypes.STRING
  }
}


class Customer extends Model{
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: "Customer",
      timestamps: false
    }
  }
}

module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer};
