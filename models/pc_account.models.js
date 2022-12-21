module.exports = (sequelize, Sequelize) => {
    const Transaction_Detail = sequelize.define('transaction_details', {
        // Model attributes are defined here
        pc_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Transaction_Detail;
}