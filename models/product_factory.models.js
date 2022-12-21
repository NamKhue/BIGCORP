module.exports = (sequelize, Sequelize) => {
    const Transaction_Detail = sequelize.define('transaction_details', {
        // Model attributes are defined here
        stt: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        fa_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
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
    }, {
        timestamps: false
    });
    return Transaction_Detail;
}