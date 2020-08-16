var express = require("express");
var router = express.Router();

var Usuario = require("../modelo/modelo_usuario");

router.get("/personas", function (req, res) {
  Usuario.find()
    .exec()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
