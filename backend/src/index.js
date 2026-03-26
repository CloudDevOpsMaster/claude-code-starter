const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas básicas
app.get('/api/health', (req, res) => {
  res.json({ success: true, data: { status: 'ok' } });
});

// Rutas de recursos
app.use('/api/tasks', tasksRouter);

// Servir archivos estáticos al final
app.use(express.static('frontend'));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

// Solo escuchar si se ejecuta directamente (no cuando se importa para tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 API running on http://localhost:${PORT}`);
  });
}

module.exports = app;
