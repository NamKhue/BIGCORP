module.exports = (sequelize, Sequelize) => {
    const Product_Category = sequelize.define('product_categories', {
        // Model attributes are defined here
        category_id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false
    });
    return Product_Category;
}