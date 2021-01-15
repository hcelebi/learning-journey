const express = require('express');
const app = express();
const port = 3000;

app.get('/',(resq, res) => {
    res.send('Hello World')
});