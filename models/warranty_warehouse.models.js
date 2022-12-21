module.exports = (sequelize, Sequelize) => {
    const Warranty_Warehouse = sequelize.define('warranty_warehouse', {
        // Model attributes are defined here
        warranty_summon_card_id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        da_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        wc_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        status: {
            type: Sequelize.STRING,
        },
    }, {
        timestamps: false
    });
    return Warranty_Warehouse;
}