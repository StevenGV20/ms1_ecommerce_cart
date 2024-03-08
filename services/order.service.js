const pool = require("../libs/postgres.pool")

class OrderService{

  constructor(){
    this.pool = pool;
    this.pool.on("error", (err)=> console.error(err));
  }

  async create(data){

  }

  async find(){
    const query = "SELECT * FROM public.orders";
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id){
    return this.find().find(item => item.id === id);
  }

  async update(data) {

  }

  async delete(id) {

  }
}

module.exports = OrderService;
