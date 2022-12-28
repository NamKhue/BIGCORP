module.exports = (sequelize, Sequelize) => {
    const Product_Distriagent = sequelize.define('product_distriagents', {
        // Model attributes are defined here
        stt: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        da_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        product_id: {
            type: Sequelize.STRING,
            allowNull: false,
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