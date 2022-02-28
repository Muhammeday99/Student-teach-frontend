import React, { useState,useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import Question from './question';
import QuestionCard from './questionCard';
import './styles/questions.css'
import axiosInt from '../utils/axios';

const Questions = (props) => {

  const [questions, setQuestions] = useState([])
  
  useEffect(() => {
    axiosInt.get('/questions/').then((res) => {
      setQuestions(res.data)
    }) 
  },[]);

  const [selectedQuestion, setSelectedQuestion] = useState('')
  const [isQuestion,setIsQuestion] = useState(false)

  if (!isQuestion) {
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
          <span style={{ fontSize: 'larger' }}>Type</span>
          <select className='select'>
            <option>Math</option>
            <option>Physics</option>
            <option>Science</option>
          </select>
        </div>
        <div className='searchContainer'>
          <BsSearch size='30' />
          <input type='search' placeholder='Search' className='search' />
        </div>
      </div>
      <div className='qCardsContainer'>
        {questions.map(card => {
          return <QuestionCard question={card} onClick={() => {
            setSelectedQuestion(card)
            setIsQuestion(true)
          }} />
        })}
      </div>
    </div>)
  } else {
    return <Question question={selectedQuestion} />
  }
}

export default Questions