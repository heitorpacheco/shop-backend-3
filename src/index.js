const express = require('express');

const app = express();

app.get('/get', (req, res) => {
  return res.json({ ok: true });
});

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});