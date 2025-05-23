const mongoose = require('mongoose');

const EspecialidadSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  imagen: String,
  doctor: String,
  ubicacion: String
});

module.exports = mongoose.model('Especialidad', EspecialidadSchema);
