module.exports = (sequelize, Sequelize) => {
    const Transaction_Detail = sequelize.define('transaction_details', {
        // Model attributes are defined here
        warranty_summon_card_id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        da_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
    }, {
        timestamps: false
    });
    return Transaction_Detail;
}