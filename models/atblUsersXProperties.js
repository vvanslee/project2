module.exports = function (sequelize, DataTypes) {

    var UsersXProperties = sequelize.define("atblUsersXProperties", {
        UserXPropertyID: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false},
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        PropertyID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')},
        updatedAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')}
    });

    return UsersXProperties;
    
};