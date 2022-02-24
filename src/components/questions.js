import React from 'react';
import { BsSearch } from 'react-icons/bs';
import QuestionCard from './questionCard';
import './styles/questions.css'

const Questions = (props) => {

  const questions = [{
    title: 'Question title',
    tags: ['Math', 'Pyhisics'],
    description: 'Question description Question description Question description Question description Question description ',
    author: { name: 'Muhammed Eyup' },
    comments: [
      'comment1',
      'comment1', 'comment1',
      'comment1','comment1','comment1','comment1','comment1'
    ],
    isSolved: true
  }]

  return (<div className='qContainer'>
    <div className='qheader'>
      <div className='headerLeft'>
        <h1>All Questions</h1>
        <button className='btnSecondary'>Ask a question</button>
      </div>
      <div className='headerRight'>
        {questions.length + ' Questions'}
      </div>
    </div>
    <div class="subNav">
        <div className='filter'>
          <span style={{fontSize:'larger'}}>Type</span>
          <select className='select'>
            <option>Math</option>
            <option>Physics</option>
            <option>Science</option>
          </select>
        </div>
        <div className='searchContainer'>
          <BsSearch size='30' />
          <input type='search' placeholder='Search' className='search'/>
        </div>
      </div>
      <div className='qCardsContainer'>
        {questions.map(card => {
          return <QuestionCard question={card} />
        })}
      </div>
  </div>)
}

export default Questions