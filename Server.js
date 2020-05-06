const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Ohayou PACcode!');
});

app.listen(3001);