const createError = require("http-errors")
const express = require("express")
//El controlador se encargar de importar los datos de services. js y manejar lo errores que puedan surgir 
const { ProductsService } = require("./services.js");

const debug = require("debug")("app:module-products-controller");

const { Response } = require("../common/response.js")

//Maneja Service.js agregandole un manejador de problemas,agregar peticiones tambien hacer  respuestas ya que es una 
//promesa debera tener async y await

module.exports.ProductsController = {
	getProducts: async (req, res) => {
          try {
            let products = await ProductsService.getAll()
            Response.success(res, 200, "Lista de productos", products); //res.json(products)
          } catch (error) {
          	debug(error);
            Response.error(res) //res.status(500).json({ message: "Internal Server Error"});
          }
	},
	getProduct: async (req, res) => {
           try {
           	const { params: { id } } = req;
            let product = await ProductsService.getById(id)

            if (!product) {
              Response.error(res, new createError.NotFound()) //If doenst exist a product with the id 404 error
            }

            Response.success(res, 200, `Producto ${id}`, product); //res.json(product)
          } catch (error) {
          	debug(error);
            Response.error(res); //res.status(500).json({ message: "Internal Server Error"});
          }
	},
	createProducts: async (req, res) => {
          try {
          	const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            } else {  
            const insertedId = await ProductsService.create(body)
            Response.success(res, 201, "Producto agregado", insertedId); //res.json(insertedId)
            }
          } catch (error) {
          	debug(error);
            Response.error(res); //res.status(500).json({ message: "Internal Server Error"});
          }
	},
 generateReport: async (req, res) => {
          try {
            if (!res.headersSent) {
            ProductsService.generateReport("inventario", res);
            Response.success(res, 201, "Reporte descargado", );
              } else {
            console.error('Headers already sent');
            }

            } catch (error) {

            debug(error);
            Response.error(res); //res.status(500).json({ message: "Internal Server Error"});
          }
  },

}