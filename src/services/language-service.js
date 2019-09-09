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
  }
};

export default LanguageService;