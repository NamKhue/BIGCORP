module.exports = (sequelize, Sequelize) => {
    const Product_Factory = sequelize.define('product_factories', {
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
    return Product_Factory;
}