module.exports = (sequelize, Sequelize) => {
    const Transaction_Detail = sequelize.define('transaction_details', {
        // Model attributes are defined here
        product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Transaction_Detail;
}