module.exports = (sequelize, Sequelize) => {
    const Fix_Factory_Warehouse = sequelize.define('fix_factory_warehouse', {
        // Model attributes are defined here
        product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Fix_Factory_Warehouse;
}