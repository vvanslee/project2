module.exports = function(sequelize, DataTypes) {
	
	var users = sequelize.define('tblUsers', {
		UserID: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false},
		UserName: {type: DataTypes.TEXT},
		FirstName: { type: DataTypes.STRING,notEmpty: true},
		LastName: { type: DataTypes.STRING,notEmpty: true},
		// about : {type:DataTypes.TEXT},
		Email: { type: DataTypes.STRING, validate: {isEmail:true} },
		Password: {type: DataTypes.STRING,allowNull: false },
		Landlord: {type: DataTypes.BOOLEAN, defaultValue: false},
		LastLogin: {type: DataTypes.DATE},
		Status: {type: DataTypes.ENUM('active','inactive'), defaultValue:'active'},
        createdAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')},
        updatedAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')}
	});
	
	return users;
}