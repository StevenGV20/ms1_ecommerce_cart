const pool = require("../libs/postgres.pool")

class ProductsService{

  constructor(){
    this.pool = pool;
    this.pool.on("error", (err)=> console.error(err));
  }

  /* async create(data){
    //return data;
  } */

  async find(){
    const query = "SELECT * FROM public.product";
    const rta = await this.pool.query(query);
    return rta.rows;
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
