const dbConfig = require("../configs/db.config");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    // logging: true,
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
db.customers = require("../models/customers.models")(sequelize, Sequelize);
db.product_customer = require("../models/product_customer.models")(sequelize, Sequelize);
db.warranty_summon_customer_distriagent = require("../models/warranty_summon_customer_distriagent.models")(sequelize, Sequelize);
db.bought_customer_distriagent = require("../models/bought_customer_distriagent.models")(sequelize, Sequelize);
db.cant_fix_distriagent_warehouse = require("../models/cant_fix_distriagent_warehouse.models")(sequelize, Sequelize);
db.check_warranty = require("../models/check_warranty.models")(sequelize, Sequelize);
db.distribution_agents = require("../models/distribution_agents.models")(sequelize, Sequelize);
db.factories = require("../models/factories.models")(sequelize, Sequelize);
db.fix_factory_warehouse = require("../models/fix_factory_warehouse.models")(sequelize, Sequelize);
db.info_products = require("../models/info_products.models")(sequelize, Sequelize);
db.info_warranty_products = require("../models/info_warranty_products.models")(sequelize, Sequelize);
db.pc_accounts = require("../models/pc_accounts.models")(sequelize, Sequelize);
db.product_categories = require("../models/product_categories.models")(sequelize, Sequelize);
db.product_distriagent = require("../models/product_distriagent.models")(sequelize, Sequelize);
db.product_factory = require("../models/product_factory.models")(sequelize, Sequelize);
db.sold_products = require("../models/sold_products.models")(sequelize, Sequelize);
db.transactions = require("../models/transactions.models")(sequelize, Sequelize);
db.transaction_details = require("../models/transaction_details.models")(sequelize, Sequelize);
db.warranty_centers = require("../models/warranty_centers.models")(sequelize, Sequelize);
db.warranty_summon_distriagents_warehouse = require("../models/warranty_summon_distriagents_warehouse.models")(sequelize, Sequelize);
db.warranty_warehouse = require("../models/warranty_warehouse.models")(sequelize, Sequelize);


//customers
db.customers.hasMany(db.product_customer, {
    foreignKey: 'customer_id'
})

db.product_customer.belongsTo(db.customers, {
    foreignKey: 'customer_id',
    targetKey: 'customer_id'
});

db.customers.hasOne(db.warranty_summon_customer_distriagent, {
    foreignKey: 'customer_id'
})

db.warranty_summon_customer_distriagent.belongsTo(db.customers, {
    foreignKey: 'customer_id',
    targetKey: 'customer_id'
})

db.customers.hasMany(db.transactions, {
    foreignKey: 'customer_id'
})

db.transactions.belongsTo(db.customers, {
    foreignKey: 'customer_id',
    targetKey: 'customer_id'
})

db.customers.hasMany(db.transaction_details, {
    foreignKey: 'customer_id'
})

db.transaction_details.belongsTo(db.customers, {
    foreignKey: 'customer_id',
    targetKey: 'customer_id'
})

db.customers.hasOne(db.bought_customer_distriagent, {
    foreignKey: 'customer_id'
})

db.bought_customer_distriagent.belongsTo(db.customers, {
    foreignKey: 'customer_id',
    targetKey: 'customer_id'
})

db.customers.hasMany(db.check_warranty, {
    foreignKey: 'customer_id'
})

db.check_warranty.belongsTo(db.customers, {
    foreignKey: 'customer_id',
    targetKey: 'customer_id'
})

//distribution_agents
db.distribution_agents.hasMany(db.product_distriagent, {
    foreignKey: 'da_id'
})

db.product_distriagent.belongsTo(db.distribution_agents, {
    foreignKey: 'da_id',
    targetKey: 'da_id'
})

db.distribution_agents.hasMany(db.bought_customer_distriagent, {
    foreignKey: 'da_id'
})

db.bought_customer_distriagent.belongsTo(db.distribution_agents, {
    foreignKey: 'da_id',
    targetKey: 'da_id'
})

db.distribution_agents.hasMany(db.warranty_summon_customer_distriagent, {
    foreignKey: 'da_id'
})

db.warranty_summon_customer_distriagent.belongsTo(db.distribution_agents, {
    foreignKey: 'da_id',
    targetKey: 'da_id'
})

db.distribution_agents.hasOne(db.cant_fix_distriagent_warehouse, {
    foreignKey: 'da_id'
})

db.cant_fix_distriagent_warehouse.belongsTo(db.distribution_agents, {
    foreignKey: 'da_id',
    targetKey: 'da_id'
})

//warranty_centers
db.warranty_centers.hasOne(db.cant_fix_distriagent_warehouse, {
    foreignKey: 'wc_id'
})

db.cant_fix_distriagent_warehouse.belongsTo(db.warranty_centers, {
    foreignKey: 'wc_id',
    targetKey: 'wc_id'
})

db.warranty_centers.hasOne(db.warranty_summon_distriagents_warehouse, {
    foreignKey: 'wc_id'
})

db.warranty_summon_distriagents_warehouse.belongsTo(db.warranty_centers, {
    foreignKey: 'wc_id',
    targetKey: 'wc_id'
})

db.warranty_centers.hasOne(db.warranty_warehouse, {
    foreignKey: 'wc_id'
})

db.warranty_warehouse.belongsTo(db.warranty_centers, {
    foreignKey: 'wc_id',
    targetKey: 'wc_id'
})

//warranty_summon_customer_distriagent
db.warranty_summon_distriagents_warehouse.hasMany(db.warranty_summon_customer_distriagent, {
    foreignKey: 'warranty_summon_card_id'
})

db.warranty_summon_customer_distriagent.belongsTo(db.warranty_summon_distriagents_warehouse, {
    foreignKey: 'warranty_summon_card_id',
    targetKey: 'warranty_summon_card_id'
})

db.warranty_summon_customer_distriagent.hasOne(db.info_warranty_products, {
    foreignKey: 'warranty_summon_card_id'
})

db.info_warranty_products.belongsTo(db.warranty_summon_customer_distriagent, {
    foreignKey: 'warranty_summon_card_id',
    targetKey: 'warranty_summon_card_id'
})

db.warranty_warehouse.hasOne(db.warranty_summon_customer_distriagent, {
    foreignKey: 'warranty_summon_card_id'
})

db.warranty_summon_customer_distriagent.belongsTo(db.warranty_warehouse, {
    foreignKey: 'warranty_summon_card_id',
    targetKey: 'warranty_summon_card_id'
})

//unique_product_id
db.product_customer.hasOne(db.info_warranty_products, {
    foreignKey: 'unique_product_id'
})

db.info_warranty_products.belongsTo(db.product_customer, {
    foreignKey: 'unique_product_id',
    targetKey: 'unique_product_id'
})

db.product_customer.hasOne(db.transaction_details, {
    foreignKey: 'unique_product_id'
})

db.transaction_details.belongsTo(db.product_customer, {
    foreignKey: 'unique_product_id',
    targetKey: 'unique_product_id'
})

db.product_customer.hasOne(db.check_warranty, {
    foreignKey: 'unique_product_id'
})

db.check_warranty.belongsTo(db.product_customer, {
    foreignKey: 'unique_product_id',
    targetKey: 'unique_product_id'
})

//product_id
db.product_factory.hasMany(db.info_products, {
    foreignKey: 'product_id'
})

db.info_products.belongsTo(db.product_factory, {
    foreignKey: 'product_id',
    targetKey: 'product_id'
})

db.info_products.hasMany(db.cant_fix_distriagent_warehouse, {
    foreignKey: 'product_id'
})

db.cant_fix_distriagent_warehouse.belongsTo(db.info_products, {
    foreignKey: 'product_id',
    targetKey: 'product_id'
})

db.info_products.hasMany(db.product_distriagent, {
    foreignKey: 'product_id'
})

db.product_distriagent.belongsTo(db.info_products, {
    foreignKey: 'product_id',
    targetKey: 'product_id'
})

db.info_products.hasOne(db.transaction_details, {
    foreignKey: 'product_id'
})

db.transaction_details.belongsTo(db.info_products, {
    foreignKey: 'product_id',
    targetKey: 'product_id'
})

db.info_products.hasMany(db.product_customer, {
    foreignKey: 'product_id'
})

db.product_customer.belongsTo(db.info_products, {
    foreignKey: 'product_id',
    targetKey: 'product_id'
})

db.info_products.hasMany(db.fix_factory_warehouse, {
    foreignKey: 'product_id'
})

db.fix_factory_warehouse.belongsTo(db.info_products, {
    foreignKey: 'product_id',
    targetKey: 'product_id'
})

//fa_id
db.factories.hasMany(db.product_factory, {
    foreignKey: 'fa_id'
})

db.product_factory.belongsTo(db.factories, {
    foreignKey: 'fa_id',
    targetKey: 'fa_id'
})

//category_id
db.product_categories.hasMany(db.info_products, {
    foreignKey: 'category_id'
})

db.info_products.belongsTo(db.product_categories, {
    foreignKey: 'category_id',
    targetKey: 'category_id'
})

//transaction_id
db.transactions.hasOne(db.transaction_details, {
    foreignKey: 'transaction_id'
})

db.transaction_details.belongsTo(db.transactions, {
    foreignKey: 'transaction_id',
    targetKey: 'transaction_id'
})


sequelize.sync();
module.exports = db;