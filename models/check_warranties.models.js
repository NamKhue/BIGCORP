
module.exports = (sequelize, Sequelize) => {
    const Check_Warranty = sequelize.define('check_warranties', {
        // Model attributes are defined here
        unique_product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        customer_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        warranty_period: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false
    });
    return Check_Warranty;
}