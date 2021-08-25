const axios = require('axios');

class LearningJourneyService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    async getMessage() {
        return axios.get(this.baseURL + '/messages')
        .then(response => {
            return `${response.data.message} - ${response.data.name} ${response.data.surname}`;
        })
        .catch(error => console.log("Error in getMessage", error));
    }
}

module.exports = { LearningJourneyService }
