const Cita = require('../models/Cita');

exports.crearCita = async (req, res) => {
  const { nombre, cedula, correo, fecha, especialidad, doctor, ubicacion } = req.body;

  if (!nombre || !cedula || !correo || !fecha) {
    return res.status(400).json({ mensaje: 'Campos requeridos faltantes', estado: 'Rechazada' });
  }

  const hoy = new Date().setHours(0,0,0,0);
  const fechaCita = new Date(fecha).setHours(0,0,0,0);
  const estado = fechaCita >= hoy ? 'Confirmada' : 'Rechazada';

  const nuevaCita = new Cita({ nombre, cedula, correo, fecha, especialidad, doctor, ubicacion, estado });
  await nuevaCita.save();
  res.status(201).json(nuevaCita);
};

exports.obtenerCitas = async (req, res) => {
  const { correo, estado } = req.query;
  const filtro = { ...(correo && { correo }), ...(estado && { estado }) };
  const citas = await Cita.find(filtro);
  res.json(citas);
};

exports.cancelarCita = async (req, res) => {
  const cita = await Cita.findById(req.params.id);
  if (!cita) return res.status(404).json({ mensaje: 'Cita no encontrada' });

  cita.estado = 'Cancelada';
  await cita.save();
  res.json(cita);
};
