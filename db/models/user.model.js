const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = 'user';

const UserSchema = {
  userId:{
    allowNull: false,
    field: "user_id",
    type: DataTypes.INTEGER
  },
  userName:{
    allowNull: false,
    field: "user_name",
    type: DataTypes.STRING
  }
}


class User extends Model{
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User};
