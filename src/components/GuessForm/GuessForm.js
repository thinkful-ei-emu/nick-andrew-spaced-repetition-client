import React from 'react';
import './GuessForm.css';

class GuessForm extends React.Component {


  render(){


    return (
      <form className='guess-form' onSubmit={this.props.handleSubmit}>
        <div className='guess-form-row'>
          <label htmlFor='guess'>Translation: </label>
          <input type='text' id='user_guess' required></input>
        </div>
        <div className='guess-form-row'>
          <button type='submit'>Answer</button>
        </div>
      </form>
    );
  }
}

export default GuessForm;