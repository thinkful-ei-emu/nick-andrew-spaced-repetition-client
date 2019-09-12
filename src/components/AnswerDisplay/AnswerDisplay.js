import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';


class AnswerDisplay extends React.Component {

  static contextType = LanguageContext;

  



  determineCorrect = (userWord, currWord, wordsArr) => {
    let searchWord = userWord.toLowerCase();

    const answerObj = { isCorrect: false, compareWord: '' };

    for (let i = 0; i < wordsArr.length; i++) {
      if (currWord === wordsArr[i].original) {
        answerObj.compareWord = wordsArr[i].translation;
      };
    }

    if (answerObj.compareWord.toLowerCase() === searchWord) {
      answerObj.isCorrect = true;
      return answerObj;
    }

    return answerObj;
  }


  render() {
    const { user_answer, currWord } = this.props;
    const wordArr = this.context.words;
    let { isCorrect, compareWord } = this.determineCorrect(user_answer, currWord, wordArr);

    if (wordArr.length === 0) {
      return (
        <div className='learn-word-container'>
          <section className='answer-display'>
            <p className='error'>Something went wrong, please refresh the homepage(dashboard) to continue</p>
          </section>
        </div>
      );
    }
    if (isCorrect) {
      return (
        <div className='learn-word-container'>
          <section className='answer-display'>
            <p className='answer-correct'>Correct!</p>
            <button onClick={this.props.handleNext}>Next</button>
          </section>
        </div>
      );
    } else {
      return (
        <div className='learn-word-container'>
          <section className='answer-display'>
            <p className='answer-incorrect'>
              You answered <strong>{user_answer}</strong>. The correct answer was <strong>{compareWord}</strong>
            </p>
            <button onClick={this.props.handleNext}>Next</button>
          </section>
        </div>
      );
    }

  }




}


export default AnswerDisplay;