const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class ProductsService{

  constructor(){ }

  async create(data){
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query){
    const options = {};
    const {limit,offset} = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }

    const data = await models.Product.findAll(options);
    return data;
  }

  async findOne(id){
    const product = await models.Product.findByPk(id);
    if(!product){
      throw boom.notFound("Customer not found");
    }
    return product;
  }

  async update(id,data) {
    const product = await models.Product.findByPk(id);
    if(!product){
      throw boom.notFound("Customer not found");
    }
    if(!data.name){
      throw boom.conflict("Es obligatorio enviar el campo name en el body");
    }
    const res = product.update(data);
    return res;
  }

  async delete(id) {
    const product = await models.Product.findByPk(id);
    if(!product){
      throw boom.notFound("Customer not found");
    }
    await product.destroy(id);
    return {id};
  }
}

module.exports = ProductsService;
