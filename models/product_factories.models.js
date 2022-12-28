module.exports = (sequelize, Sequelize) => {
    const Product_Factory = sequelize.define('product_factories', {
        // Model attributes are defined here
        stt: {
            type: Sequelize.STRING,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        fa_id: {
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
    return Product_Factory;
}