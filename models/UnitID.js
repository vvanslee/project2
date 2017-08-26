module.exports = function (sequelize, DataTypes) {

    var UnitID = sequelize.define("UnitID", {
        UnitID: {
            type: DataTypes.INT,
            allowNull: false,
            primaryKey: TRUE
        },
        unitName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        PropID: {
            type: DataTypes.INT,
            allowNull: false
        }
    });

    return UnitID;
    
};