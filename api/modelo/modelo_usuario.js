var mongoose = require("mongoose");

var modeloUsuario = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  cedula: {
    type: String,
    required: true,
    unique: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  nombreCompleto: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Usuario", modeloUsuario, "Usuarios");
