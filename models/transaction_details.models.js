module.exports = (sequelize, Sequelize) => {
    const Transaction_Detail = sequelize.define('transaction_details', {
        // Model attributes are defined here
        unique_product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        transaction_id: {
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
        quantity_ordered: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        unit_price: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        total: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false
    });
    return Transaction_Detail;
}