const { Sequelize }= require("sequelize");

const {config} = require('../config/config');
const setupModels = require("../db/models");


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}${config.dbPort && ':' + config.dbPort}/${config.dbName}`

console.log(URI);
const sequelize = new Sequelize(URI,{
  dialect: 'postgres',
  logging: true
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
