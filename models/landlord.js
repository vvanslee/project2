module.exports = function(sequelize, Sequelize) {

	var landlord = sequelize.define('landlord', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
        username: {type:Sequelize.TEXT},
		firstname: { type: Sequelize.STRING,notEmpty: true},
		lastname: { type: Sequelize.STRING,notEmpty: true},
		// about : {type:Sequelize.TEXT},
		email: { type:Sequelize.STRING, validate: {isEmail:true} },
        password: {type: Sequelize.STRING,allowNull: false },
        landlord: {type: Sequelize.BOOLEAN, defaultValue: true},
		last_login: {type: Sequelize.DATE},
        status: {type: Sequelize.ENUM('active','inactive'), defaultValue:'active'}
	});
	
	return landlord;
}