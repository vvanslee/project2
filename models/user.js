module.exports = function(sequelize, Sequelize) {
	
	var user = sequelize.define('user', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		username: {type:Sequelize.TEXT},
		firstname: { type: Sequelize.STRING,notEmpty: true},
		lastname: { type: Sequelize.STRING,notEmpty: true},
		// about : {type:Sequelize.TEXT},
		email: { type:Sequelize.STRING, validate: {isEmail:true} },
		password: {type: Sequelize.STRING,allowNull: false },
		landlord: {type: Sequelize.BOOLEAN, defaultValue: false},
		last_login: {type: Sequelize.DATE},
		status: {type: Sequelize.ENUM('active','inactive'), defaultValue:'active'}
	});
	
	return user;
}