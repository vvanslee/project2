module.exports = function (sequelize, DataTypes) {

    var Landlords = sequelize.define("Landlords", {
        LLID: {
            type: DataTypes.INT,
            allowNull: false,
            primaryKey: TRUE
        },
        UserName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING
        },
        Landlord: {
              type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
            set: function(value) {
                if (value === 'true') value = true;
                if (value === 'false') value = false;
                this.setDataValue('hidden', value);
            }
        }
    });

    return Landlords;
   
};