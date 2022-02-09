const fs = require("fs");

class Contenedor {
  constructor() {
  }

  async save(producto) {
    let productos;
    let arrayProductos;
  
    try {
      productos = await fs.promises.readFile("./productos.txt", "utf-8");
    }
    catch (error) {
      productos = new String("[]");
    }
  
    try {
      arrayProductos = JSON.parse(productos);
      if (!Array.isArray(arrayProductos)) {
        arrayProductos=[];
      }
  
      if (arrayProductos.length == 0){
        producto.id = 1;
      } else {
        let ultimoId = arrayProductos[arrayProductos.length - 1].id;
        producto.id=ultimoId + 1;
      }
  
      arrayProductos.push(producto);
  
      await fs.promises.writeFile("./productos.txt",JSON.stringify(arrayProductos, null, 2));
      console.log(`el producto ${producto.nombre} con el id: ${producto.id} se agrego correctamente.`);
    }
    catch (error) {
      console.log(`se produjo un error ${error.message}`);
    }
  }

  //obtiene todos los objetos del archivo-----------------------------------
  async getAll() {
    try {
      const productos = await fs.promises.readFile("./productos.txt", "utf-8");
      const arrayProductos = JSON.parse(productos);
      return arrayProductos;
    } 
    catch (error) {
      console.log(`se produjo un error ${error.message}`);
    }
  }

  //borra todo el arreglo---------------------------------
  async deleteAll() {
    try {
      const productos = await fs.promises.readFile("./productos.txt", "utf-8");

      const arrayProductos = JSON.parse(productos);

      for (let i = arrayProductos.length; i > 0; i--) {
        arrayProductos.pop();
      }
      console.log(arrayProductos);

      await fs.promises.writeFile("./productos.txt", JSON.stringify(arrayProductos, null, 2));
      console.log(`Todos los productos fueron removidos correctamente.`);
    } catch (error) {
      console.log(`se produjo un error ${error.message}`);
    }
  }

  //obtiene objeto por Id-------------------------
  async getById(id) {
    try {
      const productos = await fs.promises.readFile("./productos.txt", "utf-8");
      const arrayProductos = JSON.parse(productos);

      const filtradoId = arrayProductos.filter(function (element) {
        return element.id == id;
      });
      return filtradoId;

      await fs.promises.writeFile("./productos.txt",JSON.stringify(arrayProductos, null, 2));
      //   console.log(`filtrado correctamente.`)
    } catch (error) {
      console.log(`se produjo un error ${error.message}`);
    }
  }

  //borra por id---------------------------------
  async deleteById(id) {
    try {
      const productos = await fs.promises.readFile("./productos.txt", "utf-8");

      const arrayProductos = JSON.parse(productos);

      let deleteIndex;
      for (let i = 0; i < arrayProductos.length; i++) {
        if (arrayProductos[i].id == id){
          deleteIndex = i;
          break;
        }
      }

      arrayProductos.splice(deleteIndex, 1);

      console.log(arrayProductos);

      await fs.promises.writeFile("./productos.txt",JSON.stringify(arrayProductos, null, 2));
      console.log(`el elemento fue borrado`);
    } catch (error) {
      console.log(`se produjo un error ${error.message}`);
    }
  }
}

module.exports = Contenedor