const express = require("express");
const fs = require("fs");
const PORT = process.env.PORT || 8080;

const app = express();

const productos = fs.readFileSync("./productos.txt", "utf-8");
const arrayProductos = JSON.parse(productos);

function getRandom(min, max) {
  return Math.floor(Math.random() * (arrayProductos.length - 0)) + 0;
}


app.get("/", (req, res) => {
  res.send(`<h1 style="color:red;"> Bienvenidos a Express </h1>
  <hr>
  <h2 style="color:blue;"> Rutas disponibles: </h2>
 <ul>
  <li>/productos</li>
  <li>/productosRandom</li>
  <ul>
  `);

});

app.get("/productos", (req, res) => {
  res.send(arrayProductos);
  console.log(getRandom());
});

app.get("/productosRandom", (req, res) => {
  res.send(arrayProductos[getRandom()]);
});

app.listen(PORT, () => {
  console.log(`Servidor activo en el port ${PORT}`);
});

