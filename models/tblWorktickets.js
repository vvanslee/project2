module.exports = function (sequelize, DataTypes) {
    
    var worktickets = sequelize.define("tblWorktickets", {
        WorkticketID: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false},
        UserID: {
            type: DataTypes.INTEGER,
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
        createdAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')},
        updatedAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')}
    });

   return worktickets;
   
};