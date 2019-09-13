import React from 'react';
import './GuessForm.css';

function GuessForm(props) {

  return (
    <form className='guess-form' onSubmit={props.handleSubmit}>
      <h2>Translate the word:</h2>
      <span className='guess-form-current-word'><strong>{props.currWord}</strong></span>
      <div className='guess-form-row'>
        <label htmlFor='learn-guess-input'><span>What's the translation for this word?</span></label>
        <input type='text' id='user_guess' name='learn-guess-input' required></input>
      </div>
      <div className='guess-form-row'>
        <button type='submit'>Submit your answer</button>
      </div>
    </form>
  );

}

export default GuessForm;