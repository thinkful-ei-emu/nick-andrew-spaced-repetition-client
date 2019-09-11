import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';


class AnswerDisplay extends React.Component {

  static contextType = LanguageContext;

  

  //userWord = year
  // currWord = jahr
  // wordsArr = array of word objects from context
  determineCorrect = (userWord, currWord, wordsArr) => {
    let searchWord = userWord.toLowerCase();
    console.log(userWord, currWord, wordsArr);
    
    const answerObj = {isCorrect: false, compareWord: ''};

    for (let i = 0; i < wordsArr.length; i++) {
      if (currWord === wordsArr[i].original) {
        answerObj.compareWord = wordsArr[i].translation;
        console.log('correct answer', answerObj.compareWord);
      } else {
        //throw error?
      }
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
    let {isCorrect, compareWord} = this.determineCorrect(user_answer, currWord, wordArr);
   
    if(wordArr.length === 0){
      return <p className='error'>Something went wrong, please refresh the homepage(dashboard) to continue</p>;
    }
    if (isCorrect){
      return (
        <p>Correct!</p>
      );
    } else {
      return (
        <p>You answered {user_answer}. The correct answer was {compareWord}</p>
      );
    }
      
  } 

  


}


export default AnswerDisplay;