const express = require('express');
const compression = require('compression');
const os = require('os');
const app = express();
const PORT = 3000;

app.use(compression());
app.disable('x-powered-by');

const API_KEY = process.env.API_KEY || 'your-secret-key-here';

const requireApiKey = (req, res, next) => {
  const key = req.headers['x-api-key'];
  if (!key || key !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

app.use(requireApiKey);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

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

app.get('/me', (req, res) => {
  res.status(200).json({
    name: 'Your Full Name',
    email: 'you@example.com',
    github: 'https://github.com/yourusername/personal-api'
  });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
