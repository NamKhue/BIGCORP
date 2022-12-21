module.exports = (sequelize, Sequelize) => {
    const Product_Distriagent = sequelize.define('product_distriagent', {
        // Model attributes are defined here
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
        amount: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Product_Distriagent;
}