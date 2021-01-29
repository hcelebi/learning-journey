const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send('Hello World Kubectl')
});

app.listen(port, () => {
    console.log(`Application is starting ${port}`)
});