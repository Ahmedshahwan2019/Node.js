const express = require('express');
const port = 3000;

const app = express();
app.get('/', (req, res, next) => {
    res.send('hello from the backend to frontend');
});

app.listen(port);