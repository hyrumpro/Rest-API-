//dotenv is a library that define globl variables in .env file
require("dotenv").config();


//Define Global variables in the project that can be use in any place in this project importing this module 
//Config.nameoftheglobalvariable = Config.PORT see .env file to see more details of each global variable  
module.exports.Config = {
	port: process.env.PORT,
	mongoUri: process.env.MONGO_URI,
	mongoBbname: process.env.MONGO_DBNAME,
	//Add a variable here
    // example: process.env.example
	};
