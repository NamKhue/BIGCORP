module.exports = (sequelize, Sequelize) => {
    const Fix_Factory_Warehouse = sequelize.define('fix_factory_warehouses', {
        // Model attributes are defined here
        unique_product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        warranty_summon_card_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Fix_Factory_Warehouse;
}