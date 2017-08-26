module.exports = function (sequelize, DataTypes) {
    
    var Worktickets = sequelize.define("Worktickets", {
        WTID: {
            type: DataTypes.INT,
            allowNull: false,
            primaryKey: TRUE
        },
        TenantID: {
            type: DataTypes.INT,
            allowNull: false,
        },
        Subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Message: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,5000]
            }
        },
        Status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Date: {
            type: DataTypes.DATE
        }
    });

   return Worktickets;
   
};