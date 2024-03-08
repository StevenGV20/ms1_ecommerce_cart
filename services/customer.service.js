const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class CustomerService{

  constructor(){ }

  async create(data){
    const newCustomer = await models.Customer.create(data);
    return newCustomer;
  }

  async find(){
    const data = await models.Customer.findAll();
    return data;
  }

  async findOne(id){
    const customer = await models.Customer.findByPk(id,{
      include: ['orders']
    });
    if(!customer){
      throw boom.notFound("Customer not found");
    }
    return customer;
  }

  async update(id,data) {
    const customer = await models.Customer.findByPk(id);
    if(!customer){
      throw boom.notFound("Customer not found");
    }
    const res = customer.update(data);
    return res;
  }

  async delete(id) {
    const customer = await models.Customer.findByPk(id);
    if(!customer){
      throw boom.notFound("Customer not found");
    }
    await customer.destroy(id);
    return {id};
  }
}

module.exports = CustomerService;
