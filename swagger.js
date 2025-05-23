const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerSpec = swaggerJsDoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'API Citas Médicas', version: '1.0.0' }
  },
  apis: ['./routes/*.js']
});

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
