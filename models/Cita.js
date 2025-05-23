const mongoose = require('mongoose');

const CitaSchema = new mongoose.Schema({
  nombre: String,
  cedula: String,
  correo: String,
  fecha: Date,
  especialidad: String,
  doctor: String,
  ubicacion: String,
  estado: { type: String, enum: ['Confirmada', 'Rechazada', 'Cancelada'] }
});

module.exports = mongoose.model('Cita', CitaSchema);
