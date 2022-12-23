module.exports = (sequelize, Sequelize) => {
    const PC_Account = sequelize.define('pc_account', {
        // Model attributes are defined here
        pc_id: {
            type: Sequelize.STRING,
            allowNull: false,
            // primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return PC_Account;
}