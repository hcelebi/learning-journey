const axios = require('axios');

class LearningJourneyService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getMessage() {

    return axios.get(this.baseURL + '/message')
    .then(response => {
      return {
        status: 'ok',
        messageText: `${response.data.message}`
      };
    })
    .catch(error => console.log("Error in getMessage", error));
  }
}

module.exports = {LearningJourneyService}
