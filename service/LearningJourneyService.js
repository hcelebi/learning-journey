const axios = require('axios');

class LearningJourneyService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    async getMessage() {
        return axios.get(this.baseURL + '/message')
        .then(response => {
            return response.data.message + "1111";
        })
        .catch(error => console.log("Error in getMessage", error));
    }
}

module.exports = { LearningJourneyService }