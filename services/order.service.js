
const getConnection = require("../libs/postgres")

class OrderService{

  constructor(){
    this.products = [];
  }

  async create(data){

  }

  async find(){
    const cliente = await getConnection();
    const rta = await cliente.query("SELECT * FROM orders");
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
