import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageService from '../../services/language-service';


class AnswerDisplay extends React.Component {

  static contextType = LanguageContext;


  
  
  

  determineCorrect = (userWord, translation) => {
    return userWord.toLowerCase() === translation;
  }


  render() {
    console.log('props', this.props);

    
    const { user_answer, currWord, totalScore, translation } = this.props;
    
    console.log(translation);

    let isCorrect = this.determineCorrect(user_answer, translation);


    if (isCorrect) {
      return (
        <div className='learn-word-container'>
          <section className='DisplayScore'>
            <p className='answer-correct'>Correct!</p>
            <button onClick={this.props.handleNext}>Next</button>
          </section>
        </div>
      );
    } else {
      console.log('translation', translation);
      return (
        <div className='learn-word-container'>
          <section className='DisplayScore'>
            <h2>Good try, but not quite right :(</h2>
            <p>Your total score is: {totalScore}</p>


            <button onClick={this.props.handleNext}>Next</button>
          </section>
          <section className='DisplayFeedback'>
            <p className='answer-incorrect'>
              The correct translation for <strong>{currWord}</strong> was <strong>{translation}</strong> and you chose <strong>{user_answer}</strong>.
            </p>
          </section>
        </div>
      );
    }
  


  }




}


export default AnswerDisplay;