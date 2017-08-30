module.exports = function (sequelize, DataTypes) {

    var UsersXUnits = sequelize.define("atblUsersXUnits", {
        UserXUnitID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false},
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        UnitID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')},
        updatedAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')}
    });

   return UsersXUnits;
   
};