import app from './app';

app.get('/gets', (req, res) => {
  return res.json({ ok: true });
});

app.listen(3333);
