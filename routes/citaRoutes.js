const express = require('express');
const router = express.Router();
const citaCtrl = require('../controllers/citaController');

router.post('/citas', citaCtrl.crearCita);
router.get('/citas', citaCtrl.obtenerCitas);
router.put('/citas/:id/cancelar', citaCtrl.cancelarCita);

module.exports = router;
