module.exports = function (sequelize, DataTypes) {

    var TenantID_UnitID = sequelize.define("TenantID_UnitID", {
        UnitID: {
            type: DataTypes.INT,
            allowNull: false,
        },
        TenantID: {
            type: DataTypes.INT,
            allowNull: false
        }
    });

   return TenantID_UnitID;
   
};