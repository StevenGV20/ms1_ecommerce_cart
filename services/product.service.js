const pool = require("../libs/postgres.pool")

class ProductsService{

  constructor(){
    this.pool = pool;
    this.pool.on("error", (err)=> console.error(err));
  }

  async create(data){

    return data;
  }

  async find(){
    const cliente = await getConnection();
    const rta = await cliente.query("SELECT * FROM public.product");
    return rta.rows;
  }

  async findOne(id){
    const cliente = await getConnection();
    const rta = await cliente.query(`SELECT * FROM public.product where product_id = ${id}`);
    //return await this.find().find(item => item.id === id);
    return rta.rows;
  }

  async update(data) {

  }

  async delete(id) {

  }
}

module.exports = ProductsService;
