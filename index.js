const express = require('express');
const app = express();
const port = 3000;
const {LearningJourneyService} = require('./service/LearningJourneyService')

app.get('/learning-journey', async (req, res) => {
    const learningJourneyService = new LearningJourneyService('http://localhost:8080/');

    res.send(await learningJourneyService.getMessage())
});

app.listen(port, () => {
    console.log(`Application is starting ${port}`)
});
