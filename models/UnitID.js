module.exports = function (sequelize, DataTypes) {

    var UnitID = sequelize.define("UnitID", {
        UnitID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        unitName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        PropID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return UnitID;
    
};