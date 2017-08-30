module.exports = function (sequelize, DataTypes) {

    var units = sequelize.define("tblUnits", {
        UnitID: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false},
        UnitName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        PropertyID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')},
        updatedAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')}
    });

    return units;
    
};