const dbConfig = require("../configs/db.config");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: console.log,
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
db.accounts = require("../models/accounts.models")(sequelize, Sequelize);
db.check_warranties = require("../models/check_warranties.models")(sequelize, Sequelize);
db.customers = require("../models/customers.models")(sequelize, Sequelize);
db.distribution_agents = require("../models/distribution_agents.models")(sequelize, Sequelize);
db.factories = require("../models/factories.models")(sequelize, Sequelize);
db.fix_factory_warehouses = require("../models/fix_factory_warehouses.models")(sequelize, Sequelize);
db.info_products = require("../models/info_products.models")(sequelize, Sequelize);
db.product_categories = require("../models/product_categories.models")(sequelize, Sequelize);
db.product_customers = require("../models/product_customers.models")(sequelize, Sequelize);
db.product_distriagents = require("../models/product_distriagents.models")(sequelize, Sequelize);
db.product_factories = require("../models/product_factories.models")(sequelize, Sequelize);
db.transactions = require("../models/transactions.models")(sequelize, Sequelize);
db.transaction_details = require("../models/transaction_details.models")(sequelize, Sequelize);
db.warranty_centers = require("../models/warranty_centers.models")(sequelize, Sequelize);
db.warranty_warehouses = require("../models/warranty_warehouses.models")(sequelize, Sequelize);


// customer_id
db.customers.hasMany(db.product_customers, {
    foreignKey: 'customer_id'
})

db.product_customers.belongsTo(db.customers, {
    foreignKey: 'customer_id',
    targetKey: 'customer_id'
});

db.customers.hasMany(db.transactions, {
    foreignKey: 'customer_id'
})

db.transactions.belongsTo(db.customers, {
    foreignKey: 'customer_id',
    targetKey: 'customer_id'
})

db.customers.hasMany(db.warranty_warehouses, {
    foreignKey: 'customer_id'
})

db.warranty_warehouses.belongsTo(db.customers, {
    foreignKey: 'customer_id',
    targetKey: 'customer_id'
})

// db.customers.hasMany(db.transaction_details, {
//     foreignKey: 'customer_id'
// })

// db.transaction_details.belongsTo(db.customers, {
//     foreignKey: 'customer_id',
//     targetKey: 'customer_id'
// })

// db.customers.hasMany(db.check_warranties, {
//     foreignKey: 'customer_id'
// })

// db.check_warranties.belongsTo(db.customers, {
//     foreignKey: 'customer_id',
//     targetKey: 'customer_id'
// })

//distribution_agents
// db.distribution_agents.hasMany(db.transactions, {
//     foreignKey: 'da_id'
// })

// db.transactions.belongsTo(db.distribution_agents, {
//     foreignKey: 'da_id',
//     targetKey: 'da_id'
// })

// da_id
db.distribution_agents.hasMany(db.product_distriagents, {
    foreignKey: 'da_id'
})

db.product_distriagents.belongsTo(db.distribution_agents, {
    foreignKey: 'da_id',
    targetKey: 'da_id'
})

db.distribution_agents.hasMany(db.warranty_warehouses, {
    foreignKey: 'da_id'
})

db.warranty_warehouses.belongsTo(db.distribution_agents, {
    foreignKey: 'da_id',
    targetKey: 'da_id'
})

// warranty_summon_card_id
db.fix_factory_warehouses.hasMany(db.warranty_warehouses, {
    foreignKey: 'unique_product_id'
})

db.warranty_warehouses.belongsTo(db.fix_factory_warehouses, {
    foreignKey: 'unique_product_id',
    targetKey: 'unique_product_id'
})

//unique_product_id
db.product_customers.hasOne(db.check_warranties, {
    foreignKey: 'unique_product_id'
})

db.check_warranties.belongsTo(db.product_customers, {
    foreignKey: 'unique_product_id',
    targetKey: 'unique_product_id'
})

//product_id
db.product_factories.hasMany(db.info_products, {
    foreignKey: 'product_id'
})

db.info_products.belongsTo(db.product_factories, {
    foreignKey: 'product_id',
    targetKey: 'product_id'
})

db.product_distriagents.hasMany(db.info_products, {
    foreignKey: 'product_id'
})

db.info_products.belongsTo(db.product_distriagents, {
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

db.product_customers.hasMany(db.info_products, {
    foreignKey: 'product_id'
})

db.info_products.belongsTo(db.product_customers, {
    foreignKey: 'product_id',
    targetKey: 'product_id'
})

//fa_id
db.factories.hasMany(db.product_factories, {
    foreignKey: 'fa_id'
})

db.product_factories.belongsTo(db.factories, {
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