const express = require('express');
const mongoose = require('mongoose');

//Iniciando o APP
const app = express();

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
);

//Primeira Ro
app.get('/', (req, res) => {
    res.send("Hello uordi!");
});

app.listen(3001);