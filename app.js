require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const citaRoutes = require('./routes/citaRoutes');
const especialidadRoutes = require('./routes/especialidadRoutes');
const swagger = require('./swagger');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', citaRoutes);
app.use('/api', especialidadRoutes);
swagger(app);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT || 3000, () => console.log('Servidor iniciado')))
  .catch(console.error);
