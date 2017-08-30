module.exports = function (sequelize, DataTypes) {

    var notifications = sequelize.define("tblNotifications", {
        NotificationID: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false},
        PropertyID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Message: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,5000]
            }
        },
        Expiration: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10,10]
            }
        },
        createdAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')},
        updatedAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')}
    });

    return notifications;

};