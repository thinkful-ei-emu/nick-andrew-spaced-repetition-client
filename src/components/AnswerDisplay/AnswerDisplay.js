import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageService from '../../services/language-service';


class AnswerDisplay extends React.Component {

  static contextType = LanguageContext;

  
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const head = await LanguageService.getLanguageHead();

      console.log('head', head);

      this.context.setCurrentWord(head);

      this.setState({ loaded: true, });
    }
    catch (e) {
      this.setState({
        error: e
      });
    }
  }

  

  // determineCorrect = (userWord, currWord, wordsArr) => {
  //   console.log(currWord, userWord, wordsArr);
  //   let searchWord = userWord.toLowerCase();

  //   const answerObj = { isCorrect: false, compareWord: '' };

  //   for (let i = 0; i < wordsArr.length; i++) {
  //     if (currWord === wordsArr[i].original) {
  //       answerObj.compareWord = wordsArr[i].translation;
  //     };
  //   }

  //   if (answerObj.compareWord.toLowerCase() === searchWord) {
  //     answerObj.isCorrect = true;
  //     return answerObj;
  //   }

  //   return answerObj;
  // }

  determineCorrect = (userWord, translation) => {
    return userWord.toLowerCase() === translation;
  }


  render() {
    console.log('props', this.props);
    
    let {loaded, error} = this.state;
    
    if(!loaded){
      return (<div className='loading'><div className='inner-loading'></div></div>);
    }
    // if (!wordArr.length) {
    //   return (
    //     <div className='learn-word-container'>
    //       <section className='answer-display'>
    //         <p className='error'>Something went wrong, please refresh the homepage(dashboard) to continue</p>
    //       </section>
    //     </div>
    //   );
    // }
    if(loaded){
      const { user_answer, currWord, totalScore } = this.props;
      const { translation } = this.context.currentWord;
      console.log(translation);

      let isCorrect = this.determineCorrect(user_answer, translation);


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
              <p>Your total score is: {totalScore}</p>
              <p className='answer-incorrect'>
                The word was: <strong>{currWord}</strong>.
                You answered <strong>{user_answer}</strong>. 
                The correct answer was <strong>{translation}</strong>
              </p>
              <button onClick={this.props.handleNext}>Next</button>
            </section>
          </div>
        );
      }
    }
    

  }




}


export default AnswerDisplay;