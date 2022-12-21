module.exports = (sequelize, Sequelize) => {
    const Product_Customer = sequelize.define('product_customer', {
        // Model attributes are defined here
        unique_product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        customer_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        warranty_period: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        fix_status: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        still_in_warranty_period: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        times_of_warranty: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Product_Customer;
}