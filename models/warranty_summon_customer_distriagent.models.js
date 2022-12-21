module.exports = (sequelize, Sequelize) => {
    const Warranty_Summon_Customer_Distriagent = sequelize.define('warranty_summon_customer_distriagent', {
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
        product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
    }, {
        timestamps: false
    });
    return Warranty_Summon_Customer_Distriagent;
}