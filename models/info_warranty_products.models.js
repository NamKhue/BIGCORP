module.exports = (sequelize, Sequelize) => {
    const Info_Warranty_Product = sequelize.define('info_warranty_products', {
        // Model attributes are defined here
        warranty_summon_card_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        unique_product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        status: {
            type: Sequelize.STRING,
        }
    }, {
        timestamps: false
    });
    return Info_Warranty_Product;
}