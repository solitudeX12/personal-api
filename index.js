const express = require('express');
const compression = require('compression');
const os = require('os');
const app = express();
const PORT = 3000;

app.use(compression());
app.disable('x-powered-by');

// GET /
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// GET /health
app.get('/health', (req, res) => {
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  const usedMB = (usedMem / 1024 / 1024).toFixed(2);
  const cpuLoad = os.loadavg()[0].toFixed(2);

  res.status(200).json({
    message: 'healthy',
    cpu: cpuLoad + '%',
    memory: usedMB + 'MB'
  });
});

// GET /me — replace with YOUR real details
app.get('/me', (req, res) => {
  res.status(200).json({
    name: 'Babatofunmi Osho-Davies',
    email: 'davietosh2004@gmail.com',
    github: 'https://github.com/solitudex12'
  });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
