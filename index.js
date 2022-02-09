const express = require("express");
const Contenedor = require("./contenedor.js");
const PORT = process.env.PORT || 8080;

const app = express();

const c = new Contenedor();


function getRandom(length) {
  return Math.floor(Math.random() * (length - 0)) + 0;
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
  c.getAll().then( resultado => {
    res.send(resultado);
  });
  // console.log(getRandom());
});

app.get("/productosRandom", (req, res) => {
  c.getAll().then( resultado => {
   
    res.send(resultado[getRandom(resultado.length)]);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en el port ${PORT}`);
});