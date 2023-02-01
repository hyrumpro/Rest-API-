REST API
--------------


API creada con Node Js, express js, las funcionalidades y dependencias añadiadas se pueden ver en el package.json
La caperta Src guarda la estructura del projecto
El index.js Principal es el que primero se ejecuta, la mayoria de archivos js de este projectos estan conectados entre si
desbido a que son modulos que se requieres

.env almacena las variables globales de este projecto que pueden se usadas en cualquier lado de este projecto 

database(index.js).- Conecta con la base de Datos de Mongo Db 

config.- Utiliza la dependencia dotenv para crear variables globales que utiliza las variables globales que estan almacenadas en ".env" archivo y exporta esos dato para usarlos en cualquier modulo que importe correctamente "const { Config } = require("../config/index");"

products.- con los archivos modulos index.js(principal), services.js y utils.js permite utilizar los metodos http para crear objetos o obtener objetos que seran/estan en la base de datos 




























