const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running"
  });
});

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    message: "healthy"
  });
});

// Me endpoint
app.get("/me", (req, res) => {
  res.status(200).json({
    name: "Babatofunmi Osho-Davies",
    email: "davietosh2004@gmail.com",
    github: "https://github.com/solitudex12"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});