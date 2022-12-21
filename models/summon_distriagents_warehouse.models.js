module.exports = (sequelize, Sequelize) => {
    const Transaction_Detail = sequelize.define('transaction_details', {
        // Model attributes are defined here
        summon_card_id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        amount: {
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