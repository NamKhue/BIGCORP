module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define('accounts', {
        // Model attributes are defined here
        id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        role_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        TOKEN_KEY: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        refreshToken: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Account;
}