const axios = require('axios');

class LearningJourneyService {
    constructor (baseURL){
        this.baseURL = baseURL;
    }
    async getMessage () {
        return axios.get(this.baseURL+'/message');
    }
}

module.exports = {LearningJourneyService}