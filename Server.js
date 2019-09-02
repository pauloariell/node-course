const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Hello Paulo! Just continue...Yes, continue!');
});

app.listen(2050);