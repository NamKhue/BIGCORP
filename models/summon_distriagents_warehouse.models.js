module.exports = (sequelize, Sequelize) => {
    const Summon_Distriagents_Warehouse = sequelize.define('summon_distriagents_warehouse', {
        // Model attributes are defined here
        summon_card_id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
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
        status: {
            type: Sequelize.STRING,
        },
    }, {
        timestamps: false
    });
    return Summon_Distriagents_Warehouse;
}