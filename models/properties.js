module.exports = function (sequelize, DataTypes) {

    var Properties = sequelize.define("Properties", {
        PropID: {
            type: DataTypes.INT,
            allowNull: false,
            primaryKey: TRUE
        },
        PropName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        State: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Zipcode: {
            type: DataTypes.INT,
            validate: {
                len: [5,5]
            }
        }
    });

    return Properties;
    
};