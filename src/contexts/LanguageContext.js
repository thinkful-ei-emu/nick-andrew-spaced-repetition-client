import React from 'react';
// import config from '../config';

const LanguageContext = React.createContext({
  language: null,
  score: 0,
  words: [],
  currentWord: {translation: ''},
  error: null,
  setScore: () => {},
  setLanguage: () => { },
  setWords: () => {},
  setCurrentWord: () => {},
  nextWord: () => { },
  setError: () => { },
  clearError: () => { }
});

class LanguageProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: null,
      score: 0,
      words: [],
      currentWord: {translation: ''},
      error: null
    };
  }


  /**
   * sets the state to the input language
   * 
   * @param {string} language
   */
  setLanguage = (language) => {
    this.setState({ language });
  }

  /**
   * sets the state to the input words array
   * 
   * @param {array} words
   */
  setWords = (words) => {
    this.setState({ words });
  }

  /**
   * sets the current word for the /learn route
   * 
   * @param {object} word
   */

  setCurrentWord = (word) => {
    this.setState({
      currentWord: word,
    });
  }

  setScore = (score) => {
    this.setState({ score }, () => {console.log(this.state.score);});
  }


  nextWord = () => {
    const currentWord = this.state.words.find(word =>
      word.id === this.state.currentWord.next);

    if (!currentWord) {
      /**
       * do something
       */
    }

    this.setState({
      currentWord
    });
  }

  setError = error => {
    console.error(error);
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
  }

  render() {
    const value = {
      language: this.state.language,
      score: this.state.score,
      words: this.state.words,
      currentWord: this.state.currentWord,
      error: this.state.error,
      setScore: this.setScore,
      setLanguage: this.setLanguage,
      setCurrentWord: this.setCurrentWord,
      setWords: this.setWords,
      nextWord: this.nextWord,
      setError: this.setError,
      clearError: this.clearError
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}


export default LanguageContext;
export { LanguageProvider };