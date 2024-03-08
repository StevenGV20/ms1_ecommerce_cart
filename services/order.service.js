const { models } = require("../libs/sequelize");
const boom = require("@hapi/boom");

class OrderService{

  constructor(){ }

  async create(data){
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async find(){
    const data = await models.Order.findAll();
    return data;
  }

  async findOne(id){
    const order = await models.Order.findByPk(id);
    if(!order){
      throw boom.notFound("User not found");
    }
    return order;
  }

  async update(id,data) {
    const order = await models.Order.findByPk(id);
    if(!order){
      throw boom.notFound("User not found");
    }
    const res = order.update(data);
    return res;
  }

  async delete(id) {
    const order = await models.Order.findByPk(id);
    if(!order){
      throw boom.notFound("User not found");
    }
    await order.destroy(id);
    return {id};
  }
}

module.exports = OrderService;
