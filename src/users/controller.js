const createError = require("http-errors");
const debug = require("debug")("app:module-users-controller");

const { UsersService } = require("./services.js");

const { Response } = require("../common/response");


//Maneja Service.js agregandole un manejador de problemas,agregar peticiones tambien hacer  respuestas ya que es una 
//promesa debera tener async y await

module.exports.UsersController = {
	getUsers: async (req, res) => {
          try {
            let users = await UsersService.getAll()
            Response.success(res, 200, "Lista de Usuarios", users); //res.json(products)
          } catch (error) {
          	debug(error);
            Response.error(res) //res.status(500).json({ message: "Internal Server Error"});
          }
	},
	getUser: async (req, res) => {
           try {
           	const { params: { id } } = req;
            let user = await UsersService.getById(id)

            if (!user) {
              Response.error(res, new createError.NotFound()) //If doenst exist a product with the id 404 error
            } else {
             Response.success(res, 200, `Usuario ${id}`, user); //res.json(product)
            }

          } catch (error) {
          	debug(error);
            Response.error(res); //res.status(500).json({ message: "Internal Server Error"});
          }
	},
	createUsers: async (req, res) => {
          try {
          	const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            } else {  
            const insertedId = await UsersService.create(body)
            Response.success(res, 201, "Usuario agregado", insertedId); //res.json(insertedId)
            }
          } catch (error) {
          	debug(error);
            Response.error(res); //res.status(500).json({ message: "Internal Server Error"});
          }
	},


}