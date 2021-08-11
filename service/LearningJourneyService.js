const axios = require('axios');

class LearningJourneyService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    async getMessage() {
        return axios.get(this.baseURL + '/messages')
        .then(response => {
            return response.data.message;
        })
        .catch(error => console.log("Error in getMessage", error));
    }
}

module.exports = { LearningJourneyService }
