var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Usuario = require("../modelo/modelo_usuario");

router.post("/persona", function (req, res) {

  var GuardarUsuario = new Usuario({
    _id: new mongoose.Types.ObjectId(),
    cedula: req.body.cedula,
    correo: req.body.correo,
    nombreCompleto: req.body.nombreCompleto,
  });
  GuardarUsuario.save()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (error) {
      console.log(error);
    })
});

module.exports = router;
