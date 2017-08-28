module.exports = function (sequelize, DataTypes) {

    var Notifications = sequelize.define("Notifications", {
        NoticeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        PropID: {
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
        Posted: {
            type: DataTypes.DATE
        }
    });

    return Notifications;

};