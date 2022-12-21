module.exports = (sequelize, Sequelize) => {
    const Bought_Customer_Distriagent = sequelize.define('bought_customer_distriagent', {
        // Model attributes are defined here
        customer_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        da_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
    }, {
        timestamps: false
    });
    return Bought_Customer_Distriagent;
}