const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('frontend'));

// Rutas básicas
app.get('/api/health', (req, res) => {
  res.json({ success: true, data: { status: 'API running' } });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 API running on http://localhost:${PORT}`);
});
