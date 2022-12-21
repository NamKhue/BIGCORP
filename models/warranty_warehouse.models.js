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
        wc_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        status: {
            type: Sequelize.STRING,
        },
    }, {
        timestamps: false
    });
    return Transaction_Detail;
}