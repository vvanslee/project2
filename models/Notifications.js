module.exports = function (sequelize, DataTypes) {

    var Notifications = sequelize.define("Notifications", {
        NoticeID: {
            type: DataTypes.INT,
            allowNull: false,
            primaryKey: TRUE
        },
        PropID: {
            type: DataTypes.INT,
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
        Posted: {
            type: DataTypes.DATE
        }
    });

    return Notifications;

};