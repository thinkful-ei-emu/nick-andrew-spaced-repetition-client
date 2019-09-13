import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import './WordTable.css';

class WordTable extends React.Component {

  static contextType = LanguageContext;


  createTableRows = (wordArr) => {
    return wordArr.map((word, i) => {
      let ratio;
      if(word.correct_count === 0){
        ratio = 0;
      } else if(word.incorrect_count === 0 && word.correct_count !== 0) {
        ratio = (word.correct_count).toFixed(2);
      } else {
        ratio = (word.correct_count / word.incorrect_count).toFixed(2);
      }
      return (
        <tr key={i} index={word.id}>
          <td>{word.original}</td>
          <td>{word.correct_count}</td>
          <td>{word.incorrect_count}</td>
          <td>{ratio}</td>
        </tr>);
    });
  }

  createList = (wordArr) => {
    return wordArr.map((word, i )=> {
      return (
        <li key={i}><h4>{word.original}</h4>correct answer count: {word.correct_count} incorrect answer count: {word.incorrect_count}</li>
      );
    });
  }


  render() {
    let words = this.context.words;
    let wordRows = this.createTableRows(words);
    let wordList = this.createList(words);

    return (
      <div className='word-table-container'>
        <table className='word-table'>
          <thead>
            <tr>
              <th>Words</th>
              <th>Correct</th>
              <th>Incorrect</th>
              <th>Ratio</th>
            </tr>
          </thead>
          <tbody>
            {wordRows}
          </tbody>
        </table>
        <h3>Words to practice</h3>
        <ul>
          {wordList}
        </ul>
      </div>
    );
  }
}

export default WordTable;