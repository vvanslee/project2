module.exports = function (sequelize, DataTypes) {

    var LLID_PropID = sequelize.define("LLID_PropID", {
        LLID: {
            // autoIncrement: true,
            primaryKey: true, 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        PropID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return LLID_PropID;
    
};