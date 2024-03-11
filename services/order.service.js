const sequelize = require("../libs/sequelize");
const { models } = require("../libs/sequelize");
const boom = require("@hapi/boom");

class OrderService{

  constructor(){ }

  async create(data){
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async addItem(data){
    const newOrderItem = await models.OrderItem.create(data);
    return newOrderItem;
  }

  async addAllitems(data){
    let transaction;
    try {
      if(data.length > 0){
        transaction = await sequelize.transaction();
        for(const item of data){
          await models.OrderItem.create(item);
        }
        await transaction.commit();
        return data;
      }
      else{
        throw boom.badRequest("La lista de los items no puede estar vacia.");
      }
    } catch (error) {
      if (transaction) await transaction.rollback();
      throw boom.conflict("Error al guardar los productos");
    }
  }

  async find(){
    const data = await models.Order.findAll({
      include: ['customer']
    });
    return data;
  }

  async findOne(id){
    const order = await models.Order.findByPk(id,{
      include:[
        {
          association: "customer"
        },
        {
          association: "orderItems"
        }
      ]
    });
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
