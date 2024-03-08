const { models } = require("../libs/sequelize");
const boom = require("@hapi/boom");

class OrderService{

  constructor(){ }

  async create(data){
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async find(){
    const data = await models.Order.findAll({
      include: ['customer']
    });
    return data;
  }

  async findOne(id){
    const order = await models.Order.findByPk(id);
    if(!order){
      throw boom.notFound("Customer not found");
    }
    return order;
  }

  async update(id,data) {
    const order = await models.Order.findByPk(id);
    if(!order){
      throw boom.notFound("Customer not found");
    }
    const res = order.update(data);
    return res;
  }

  async delete(id) {
    const order = await models.Order.findByPk(id);
    if(!order){
      throw boom.notFound("Customer not found");
    }
    await order.destroy(id);
    return {id};
  }
}

module.exports = OrderService;
