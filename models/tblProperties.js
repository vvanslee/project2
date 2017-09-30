module.exports = function (sequelize, DataTypes) {

    var properties = sequelize.define("tblProperties", {
        PropertyID: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false},
        PropertyName: {
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
        },
        createdAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')},
        updatedAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')}
    });

    return properties;
    
};