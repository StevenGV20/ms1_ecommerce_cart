const sequelize = require("../libs/sequelize")

class ProductsService{

  constructor(){ }

  /* async create(data){
    //return data;
  } */

  async find(){
    const query = "SELECT * FROM public.product";
    const [data] = await sequelize.query(query);
    return data;
  }
/*
  async findOne(id){
    const cliente = await getConnection();
    const rta = await cliente.query(`SELECT * FROM public.product where product_id = ${id}`);
    //return await this.find().find(item => item.id === id);
    return rta.rows;
  }

  async update(data) {

  }

  async delete(id) {

  } */
}

module.exports = ProductsService;
