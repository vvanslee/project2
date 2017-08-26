module.exports = function (sequelize, DataTypes) {

    var LLID_PropID = sequelize.define("LLID_PropID", {
        LLID: {
            type: DataTypes.INT,
            allowNull: false,
        },
        PropID: {
            type: DataTypes.INT,
            allowNull: false
        }
    });

    return LLID_PropID;
    
};