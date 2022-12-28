module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define('transactions', {
        // Model attributes are defined here
        transaction_id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        customer_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        da_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Transaction;
}