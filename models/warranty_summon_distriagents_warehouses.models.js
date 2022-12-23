module.exports = (sequelize, Sequelize) => {
    const Warranty_Summon_Distriagents_Warehouse = sequelize.define('warranty_summon_distriagents_warehouses', {
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
    }, {
        timestamps: false
    });
    return Warranty_Summon_Distriagents_Warehouse;
}