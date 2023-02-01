//Conecta con Mongo Db y conecta nuestro API

//Importa mongodb 
const { MongoClient } = require("mongodb");

//Importa dependencia debug para poder ve errores de forma correcto o poner u mensaje cuando suceda algo degug()
const debug = require("debug")("app:database");

//trae las variables globales Config
const { Config } = require("../config/index");

//Define antes la coneccion
var connection = null;

//Exporta el modulo como una promesa asi que todo otro archivo js que use este modulo debe tener una promesa para que 
//funcione correctamente, las promesa se encargara de controlar el error si es que sucede
module.exports.Database = (collection) => new Promise(async (resolve, reject) => {
         try {
         if (!connection){ 
            const client = new MongoClient(Config.mongoUri);
            connection = await client.connect();
            debug("Nueva conexion realizada con MongoDB Atlas");
           }
           debug("Reutilizando Conexion ");
           const db = connection.db(Config.mongoDbname);
           resolve(db.collection(collection));

         } catch (error) {
            reject(error);
            debug("Error cant connect with database");
         }
})