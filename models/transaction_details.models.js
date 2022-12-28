module.exports = (sequelize, Sequelize) => {
    const Transaction_Detail = sequelize.define('transaction_details', {
        // Model attributes are defined here
        transaction_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        unique_product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        product_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        quantity_ordered: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Transaction_Detail;
}