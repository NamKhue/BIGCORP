module.exports = (sequelize, Sequelize) => {
    const Warranty_Warehouse = sequelize.define('warranty_warehouses', {
        // Model attributes are defined here
        stt: {
            type: Sequelize.STRING,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        warranty_summon_card_id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        da_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        customer_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        unique_product_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        wc_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Warranty_Warehouse;
}