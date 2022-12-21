module.exports = (sequelize, Sequelize) => {
    const Sold_Product = sequelize.define('sold_products', {
        // Model attributes are defined here
        stt: {
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
        amount: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Sold_Product;
}