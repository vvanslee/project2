# project2
NW Second Project

## Work Flow
### Main Flow (Backbone)
server.js
    Function:    Server
    Purpose:    Creates a connection to the server and starts the server logic
    Requires:    main_controller.js (line 23) (/controllers/main_controller.js)

main_controller.js
    Function:    Router
    Purpose:    Sends handlebars view to the client (browser) with the response 'render' method
                Accepts user requests (e.g., clicking a link to navigate to a specific page) and routes the request to the main_model.js file
    Requires:    main_model.js (/models/main_model.js)

main_model.js
    Function:    Middleware
    Purpose:    Select which tables from the database to pull data from
                Defines names for callback methods
    Requires:    orm.js (/config/orm.js)

orm.js
    Function:    Query
    Purpose:    Defines SQL queries used to manipulate and extract data from the database tables
    Requires:    connection.js (/config/connection.js)

connection.js
    Function:    Entry Point
    Purpose:    Connect to a specified database, opens the door to submit query requests and pull out queried data
    Reuires:    (mysql module)

### Login Flow
server.js:
	app.set('views', './app/views')
		-nothing
	require("./app/models");
		index.js
		require(path.join(__dirname, '..', 'config', 'config.json'))[env];
	user.js
		-sequelize
	require('./app/routes/auth.js')(app, passport);
		require('../controllers/authcontroller.js');
			-exports rendering and redirection
	require('./app/config/passport/passport.js')(passport, models.user);
		require('bcrypt-nodejs');
		require('passport-local').Strategy;