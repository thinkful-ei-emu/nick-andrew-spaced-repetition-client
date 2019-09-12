import config from '../config';
import TokenService from './token-service';

const LanguageService = {
  getLanguage: async () => {
    let data;
    try {
      let res = await fetch(`${config.API_ENDPOINT}/language`, {
        headers: {
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        }
      });
      data = await res.json();  
    }
    catch (e) {
      throw new Error(e);
    }
    return data;
  },

  getLanguageHead: async () => {
    let data;
    try {
      let res = await fetch(`${config.API_ENDPOINT}/language/head` , {
        headers: {
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        }
      });
      data = await res.json();
    }
    catch (e) {
      throw new Error(e);
    }
    return data;
  },
  // complete when endpoint ready
  postUserGuess:  async (guess) => {
    let data;
    try {
      let res = await fetch(`${config.API_ENDPOINT}/language/guess` , {
        method: 'POST',
        headers: {
          'content-type' : 'application/json',
          'authorization': `Bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify({guess})
      });
      data = await res.json();
    }
    catch (e) {
      throw new Error(e);
    }
    return data;
  },


};

export default LanguageService;