const express = require("express"); 


const { UsersController } = require("./controller.js")


//Express Functionality that allows us use the routes independinet of the module of the application, trabaja 
//independientemente de la aplicacion

const router = express.Router();



module.exports.UsersAPI = (app) => {
	router.get("/", UsersController.getUsers)   
	      .get("/:id", UsersController.getUser)  
	      .post("/", UsersController.createUsers) 

          app.use("/api/users", router) //Define the principal router
}