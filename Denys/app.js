const express = require('express');

const app = express();

app.use('/surprize', (req, res, next) => {
    console.log('Middleware 1: Request received');
    res.send('<h1>Kurwa Bobre!!</h1>');
})

app.use('/', (req, res, next) => {
    console.log('Middleware 2: Processing request');
    res.send('<h1>SLAVA UKRAINI!</h1>');
})

app.listen(3000);