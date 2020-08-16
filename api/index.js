var express = require("express");
var path = require("path");
var app = express();
var mongoose = require("mongoose");

// coneccion a la db
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.ovug6.mongodb.net/Lab3?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then((db) => console.log("Base de datos conectada"))
  .catch((err) => console.log(err));

// redireccion public como front
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// servicios

app.use("/guardar", require("./servicio/guardar_usuarios"));

app.use("/listar", require("./servicio/listar_usuarios"));

// levantantdo servidor

app.listen(4040, function () {
  console.log("Servidor corriendo en el puerto 4040");
});
