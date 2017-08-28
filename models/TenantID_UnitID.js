module.exports = function (sequelize, DataTypes) {

    var TenantID_UnitID = sequelize.define("TenantID_UnitID", {
        UnitID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        TenantID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

   return TenantID_UnitID;
   
};