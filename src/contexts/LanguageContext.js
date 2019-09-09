import React from 'react';
// import config from '../config';

const LanguageContext = React.createContext({
  language: null,
  words: [],
  currentWord: {},
  error: null,
  setLanguage: () => { },
  setWords: () => { },
  nextWord: () => { },
  setError: () => { },
  clearError: () => { }
});

class LanguageProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: null,
      words: [],
      currentWord: {},
      error: null
    };
  }


  /**
   * sets the state to the input language
   * 
   * @param {string} language
   */
  setLanguage = (language) => {
    this.setState({ language }, () => {
      console.log('language from context', this.state.language);
    });
  }

  /**
   * sets the state to the input words array
   * 
   * @param {array} words
   */
  setWords = (words) => {
    this.setState({ words }, () => {
      console.log('words from context', this.state.words);
    });
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
      words: this.state.words,
      currentWord: this.state.currentWord,
      error: this.state.error,
      setLanguage: this.setLanguage,
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