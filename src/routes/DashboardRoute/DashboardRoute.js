import React, { Component } from 'react';
import config from '../../config';
// import TokenService from '../../services/token-service';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageService from '../../services/language-service';

class DashboardRoute extends Component {

  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  async componentDidMount() {
    try {
      const { language, words } = await LanguageService.getLanguage();

      this.context.setLanguage(language.name);
      this.context.setWords(words);

      console.log(language.name, words);
    }

    catch (e) {
      this.setState({
        error: e
      });
    }
  }

  render() {
    return (
      <section>
        implement and style me
      </section>
    );
  }
}

export default DashboardRoute;
