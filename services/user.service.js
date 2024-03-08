const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class UserService{

  constructor(){ }

  async create(data){
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find(){
    const data = await models.User.findAll();
    return data;
  }

  async findOne(id){
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound("User not found");
    }
    return user;
  }

  async update(id,data) {
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound("User not found");
    }
    const res = user.update(data);
    return res;
  }

  async delete(id) {
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound("User not found");
    }
    await user.destroy(id);
    return {id};
  }
}

module.exports = UserService;
