module.exports = (sequelize, Sequelize) => {
    const Transaction_Detail = sequelize.define('transaction_details', {
        // Model attributes are defined here
        product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        category_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
        },
        quantity: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        warranty_period: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
        },
    }, {
        timestamps: false
    });
    return Transaction_Detail;
}