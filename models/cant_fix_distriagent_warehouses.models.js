module.exports = (sequelize, Sequelize) => {
    const Cant_Fix_Distriagent_Warehouse = sequelize.define('cant_fix_distriagent_warehouses', {
        // Model attributes are defined here
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
        product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
    }, {
        timestamps: false
    });
    return Cant_Fix_Distriagent_Warehouse;
}