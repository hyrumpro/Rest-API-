
//crea un excel de la base de datos 


excelGenerator = (products, name, res) => {
   const xl = require("excel4node"); //Este paquete solo se ejecutara en esta funcion

  //Limpiando atributos para que funcionen correctamente con excel
   products = products.map((product) => {
       let id = product._id.toString();
       delete product._id //elimina la propiedad de un objeto
       return {
       	id,
       	...product
       }
   
    });


   let wb = new xl.Workbook();
   let ws = wb.addWorksheet("inventario")

   for (let i = 1;i <= products.length; i++) {
   	 for (let j = 1;j <= Object.values(products[0]).length; j++) {
         let data = Object.values(products[i - 1])[j - 1];
         if (typeof data === "string") {
         	ws.cell(i, j).string(data);
         } else {
         	ws.cell(i, j).number(data);
         }

       }
   }

   wb.write(`${name}.xlsx`, res) //Nombre del archivo excel que se creara

}

module.exports.ProductsUtils = {
	excelGenerator
}