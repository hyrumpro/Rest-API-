//Import Module htps errors, for manage errors not responses
const createError = require("http-errors");


//Define the standdard response for the modules in all the projct that implement this module
module.exports.Response = {
	success: (res, status = 200, message = "Ok", body = {}) => {
            res.status(status).json({ message, body })
	},
    error: (res, error = null) => {
            const { statusCode, message } = error ? error : new createError.InternalServerError();//If not error create error
            res.status(statusCode).json({ message })
	},

}

/*
createError.InternalServerError siempre tiene un status code y un mensaje body es igual a la estructura del json =
estructura de la respuesta o del envio 
*/