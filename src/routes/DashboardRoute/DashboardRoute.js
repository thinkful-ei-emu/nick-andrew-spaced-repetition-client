import React, { Component } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageService from '../../services/language-service';
import WordTable from '../../components/WordTable/WordTable';
import { Link } from 'react-router-dom';
import './DashboardRoute.css';

class DashboardRoute extends Component {

  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loaded: false,
    };
  }

  async componentDidMount() {
    try {
      const { language, words } = await LanguageService.getLanguage();

      this.context.setLanguage(language.name);
      this.context.setWords(words);

      this.setState({ loaded: true, });
    }
    catch (e) {
      this.setState({
        error: e
      });
    }
  }

  calculateScore = (wordArr) => {
    let score = 0;
    wordArr.forEach(word => {
      score += word.correct_count;
    });

    return score;
  }

  render() {
    let { error, loaded } = this.state;
    let language = this.context.language;
    let score = this.calculateScore(this.context.words);

    if (loaded) {
      return (
        <div className='dashboard-container'>
          <section className='dashboard'>
            <h2>{language}</h2>
            {error && <p className='error'>{error}</p>}
            <p>Total Score: <strong>{score}</strong></p>
            <WordTable />
            <button><Link to='/learn'>Learn</Link></button>
          </section>
        </div>
      );
    } else {
      return (
        <div className='dashboard-container'>
          <section className='dashboard-loading'>
            <div className='loading'>
              <div className='inner-loading'></div>
            </div>
          </section>
        </div>

      );
    }

  }
}

export default DashboardRoute;
