module.exports = (sequelize, Sequelize) => {
    const Factory = sequelize.define('factories', {
        // Model attributes are defined here
        fa_id: {
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
    return Factory;
}