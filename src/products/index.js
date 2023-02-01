const express = require("express"); 


const { ProductsController } = require("./controller.js")


//Express Functionality that allows us use the routes independinet of the module of the application, trabaja 
//independientemente de la aplicacion

const router = express.Router();



module.exports.ProductsAPI = (app) => {
	router.get("/", ProductsController.getProducts)
	      .get("/report", ProductsController.generateReport)
	      .get("/:id", ProductsController.getProduct)
	      .post("/", ProductsController.createProducts) 

          app.use("/api/products", router) //Define the principal router

}



//http:localhost:3000/api/products/
//http:localhost:3000/api/products/report
//http:localhost:3000/api/products/id
//http:localhost:3000/api/products/
