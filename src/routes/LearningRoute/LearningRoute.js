import React, { Component } from 'react';
import LanguageService from '../../services/language-service';
import LanguageContext from '../../contexts/LanguageContext';
import LearningTable from '../../components/LearningTable/LearningTable';
import AnswerDisplay from '../../components/AnswerDisplay/AnswerDisplay';
import GuessForm from '../../components/GuessForm/GuessForm';
import './LearningRoute.css';

class LearningRoute extends Component {

  static contextType = LanguageContext;

  constructor() {
    super();
    this.state = {
      error: null,
      loaded: false,
      user_answer: '',
      hasAnswered: false,
    };
  }

  async componentDidMount() {
    try {
      let wordHead = await LanguageService.getLanguageHead();

      this.context.setCurrentWord(wordHead);

      this.setState({ loaded: true });
    }
    catch (e) {
      this.setState({ error: e });
    }
  }

  handleSubmitGuess = (ev) => {
    ev.preventDefault();

    const { user_guess } = ev.target;

    LanguageService.postUserGuess(user_guess.value)
      .then(() => {
        LanguageService.getLanguage()
          .then(res => this.context.setWords(res.words));
      });

    this.setState({
      user_answer: user_guess.value,
      hasAnswered: true,
    });

  }

  handleNext = (ev) => {
    LanguageService.getLanguageHead()
      .then(newHead => this.context.setCurrentWord(newHead))
      .then(() => this.setState({
        user_answer: '',
        hasAnswered: false,
      }));
  }


  render() {
    const currentWord = this.context.currentWord;
    const { loaded, hasAnswered, user_answer } = this.state;

    if (!loaded || !currentWord) {
      return (
        <div className='learn-word-container'>
          <section className='dashboard-loading'>
            <div className='loading'><div className='inner-loading'></div></div>
          </section>
        </div>
      );
    } else if (hasAnswered) {
      return (
        <AnswerDisplay
          user_answer={user_answer}
          currWord={currentWord.nextWord}
          handleNext={this.handleNext}
        />
      );
    } else {
      return (
        <div className='learn-word-container'>
          <section className='learn-word'>
            <p>Total Score: {currentWord.totalScore}</p>
            <h3 className='curr-word'>{currentWord.nextWord}</h3>
            <GuessForm handleSubmit={this.handleSubmitGuess} />
            <LearningTable
              correct={currentWord.wordCorrectCount}
              incorrect={currentWord.wordIncorrectCount}
              word={currentWord.nextWord}
            />
          </section>
        </div>
      );
    }

  }
}

export default LearningRoute;
