module.exports = function (sequelize, DataTypes) {

    var Properties = sequelize.define("Properties", {
        PropID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
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
            type: DataTypes.INTEGER,
            validate: {
                len: [5,5]
            }
        }
    });

    return Properties;
    
};