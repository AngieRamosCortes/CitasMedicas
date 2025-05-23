const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const citaRoutes = require('../routes/citaRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api', citaRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('POST /api/citas', () => {
  it('debería crear una cita confirmada válida', async () => {
    const res = await request(app).post('/api/citas').send({
      nombre: "Angie Ramos",
      cedula: "1000096687",
      correo: "angie.ramos-c@mail.escuelaing.edu.co",
      fecha: "2025-23-05",
      especialidad: "Medicina General",
      doctor: "Dr. Juan Pérez",
      ubicacion: "Consultorio 1"
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.estado).toBe("Confirmada");
  });

  it('debería rechazar una cita con campos vacíos', async () => {
    const res = await request(app).post('/api/citas').send({
      nombre: "",
      cedula: "",
      correo: "",
      fecha: ""
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.estado).toBe("Rechazada");
  });
});
