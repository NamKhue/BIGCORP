const dbConfig = require("../configs/db.config");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;



// begin sample
db.customers = require("../models/customer.models")(sequelize, Sequelize);
db.product_customer = require("../models/product_customer.models")(sequelize, Sequelize);


db.customers.hasMany(db.product_customer, {
  foreignKey: 'customer_id'
})

db.product_customer.belongsTo(db.customers, {
  foreignKey: 'customer_id',
  targetKey: 'customer_id'
});

// end sample




sequelize.sync();
module.exports = db;