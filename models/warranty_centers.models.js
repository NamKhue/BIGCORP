module.exports = (sequelize, Sequelize) => {
    const Warranty_Center = sequelize.define('warranty_centers', {
        // Model attributes are defined here
        wc_id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Warranty_Center;
}