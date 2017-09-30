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
	
	// users.define([
	// 	{UserName: 'MrFish', FirstName: 'Calvin', LastName: 'Fishoeder', Email: 'cfishoeder@jersey.com', Password: '$2a$08$YyiNm/Lob2u4o8sXyBYVGOVPy8k0zxV4WFUQ4C1NO3r6UUVg67lBa', Landlord: 1},
	// 	{UserName: 'BBelcher', FirstName: 'Bob', LastName: 'Belcher', Email: 'bbelcher@jersey.com', Password: '$2a$08$eu8hwrGbgST3lelCeH/f4uIlWpfDZQXPiyAhioYkJeK2T3wujACO2', Landlord: 0},
	// 	{UserName: 'Teddified', FirstName: 'Teddy', LastName: 'Johnson', Email: 'teddy@sbcglobal.com', Password: '$2a$08$XkOf7fK1BwLhk4k1K1d0MO85q/GVUN1HliNrLM0ilzfcjXJy4ci/C', Landlord: 0},
	// 	{UserName: 'scrooge1', FirstName: 'Scrooge', LastName: 'McDuck', Email: 'scrooge@mcduck.org', Password: '$2a$08$PblF7ZQSOrJaGDdma79RLOpRBPumqld2vBtVgJU1BwC6P3dcpUUxO', Landlord: 1},
	// 	{UserName: 'daffy1', FirstName: 'Daffy', LastName: 'Duck', Email: 'daff@duck.net', Password: '$2a$08$wwTmeLDc9ST8XbGntlcNE.tI05.j5u.AaQbnsxxG0XtHUYKz8TXNe', Landlord: 0}
	// ]);

	return users;
}