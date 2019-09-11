import React from 'react';
import './LearningTable.css';




function LearningTable(props) {

  const { correct, incorrect, word } = props;



  return (
    <div className='learning-table-display'>
      <table className='learning-table'>
        <thead>
          <tr>
            <th colSpan='2' className='answer-cell'>Stats for {word}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='br-cell'>Correct</th>
            <th>Incorrect</th>
          </tr>
          <tr>
            <td className='br-cell'>{correct}</td>
            <td>{incorrect}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LearningTable;