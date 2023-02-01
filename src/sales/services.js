const { ObjectId } = require("mongodb");

//Con este objectid si vamos a poder realizar busquedas 

const { Database } = require("../database/index.js");

const { ProductsUtils } = require("./utils.js");

//Nombre De la coleccion que sera utilizada/creada 
const COLLECTION = "products";

//trae todos los datos de la base de datos 
const getAll = async () => {
	const collection = await Database(COLLECTION); //async Await es requerido para las promesas de database 
	return await collection.find({}).toArray();
}

//Trae datos en base al ID
const getById = async (id) => {
	const collection = await Database(COLLECTION);
	return await collection.findOne({ _id: ObjectId(id)  });

}

//Crea datos 
const create = async (product) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId

}

const generateReport = async (name, res) => {
   let products = await getAll()
   ProductsUtils.excelGenerator(products, name, res)
}

//Exporta el modulo en variables que seran usadas en controller.js asi: ProductsService.nombredelavariable(parametro)
module.exports.ProductsService = {
   getAll,
   getById,
   create,
   generateReport,
}