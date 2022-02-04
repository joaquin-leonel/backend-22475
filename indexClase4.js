const fs = require("fs");

//guarda el producto "termotanque" en el archivo----------------------------

const producto = {
nombre: "termotanque",
  precio: 1200,
  thumbnail:"https://images.fravega.com/f1000/2f2470d502144772aba8a19d3a45a9fb.jpg",
};


const save = async (producto) => {
 
   try {
     productos = await fs.promises.readFile("./productos.txt", "utf-8");
   }
   catch (error) {
      console.log(`se produjo un error ${error.message}`);
  
   }
 
   try {
      
     arrayProductos = JSON.parse(productos);
     console.log(arrayProductos)

     if (!Array.isArray (arrayProductos)) {
        arrayProductos=[];
     }
 
     if (arrayProductos.length == 0){
       producto.id = 1;
     } else {
       let ultimoId = arrayProductos[arrayProductos.length - 1].id;
       producto.id=ultimoId + 1;
     }
 
     arrayProductos.push(producto);

     console.log(arrayProductos)
 
   await fs.promises.writeFile("./productos.txt",JSON.stringify(arrayProductos, null, 2));
     console.log(`el producto ${producto.nombre} con el id: ${producto.id} se agrego correctamente.`);
   }
   catch (error) {
      console.log(`se produjo un error ${error.message}`);
   }
 };


//obtiene todos los objetos del archivo-----------------------------------
const getAll = async () => {
  try {
    const productos = await fs.promises.readFile("./productos.txt", "utf-8");
    const arrayProductos = JSON.parse(productos);
    console.log(arrayProductos);
  } 
  catch (error) {
    console.log(`se produjo un error ${error.message}`);
  }
};



//borra todo el arreglo---------------------------------
const deleteAll = async () => {
  try {
    const productos = await fs.promises.readFile("./productos.txt", "utf-8");

    const arrayProductos = JSON.parse(productos);

    for (let i = arrayProductos.length; i > 0; i--) {
      arrayProductos.pop();
    }
    console.log(arrayProductos);

    await fs.promises.writeFile("./productos.txt",JSON.stringify(arrayProductos, null, 2));
    console.log(`Todos los productos fueron removidos correctamente.`);
  } catch (error) {
    console.log(`se produjo un error ${error.message}`);
  }
};



//obtiene objeto por Id-------------------------
const getById = async (id) => {
  try {
    const productos = await fs.promises.readFile("./productos.txt", "utf-8");

    const arrayProductos = JSON.parse(productos);

    const filtradoId = arrayProductos.filter(function (element) {
      return element.id == id;
    });
    console.log(filtradoId);

    await fs.promises.writeFile("./productos.txt",JSON.stringify(arrayProductos, null, 2));
    //   console.log(`filtrado correctamente.`)
  } catch (error) {
    console.log(`se produjo un error ${error.message}`);
  }
};



//borra por id---------------------------------
const deleteById = async (id) => {
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
 };

save(producto);
//getById(1);
//getAll();
//deleteById(1);
//deleteAll();
