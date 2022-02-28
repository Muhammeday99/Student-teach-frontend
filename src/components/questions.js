import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import Question from './question';
import QuestionCard from './questionCard';
import './styles/questions.css'
import axiosInt from '../utils/axios';
import Askquestion from './askquestion';

const Questions = (props) => {

  const [showQuestionForm, setShowQuestionForm] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axiosInt.get('/questions/').then((res) => {
      setQuestions(res.data)
    })
  }, []);

  const handleAddingQuestion = (question) => {
    setQuestions([question, ...questions])
  }

  const [selectedQuestion, setSelectedQuestion] = useState('')
  const [isQuestion, setIsQuestion] = useState(false)

  if (!isQuestion) {
    return (<div className='qContainer'>
      <div className='qheader'>
        <div className='questions-header'>
          <h1>All Questions</h1>
          {questions.length + ' Questions'}
        </div>
      </div>
      <div className='filter-container'>
        <select className='select'>
          <option>Math</option>
          <option>Physics</option>
          <option>Science</option>
        </select>
        <div className='searchContainer'>
          <BsSearch size='30' />
          <input type='search' placeholder='Search' className='search' />
        </div>
        <button className='btnSecondary' onClick={() => setShowQuestionForm(true)}>Ask a question</button>
      </div>
      <div className='qCardsContainer'>
        {questions.map(card => {
          return <QuestionCard question={card} onClick={() => {
            setSelectedQuestion(card)
            setIsQuestion(true)
          }} />
        })}
      </div>
      {showQuestionForm && <Askquestion setShowQuestionForm={setShowQuestionForm} handleAddingQuestion={handleAddingQuestion} />}

    </div>)
  } else {
    return <Question question={selectedQuestion} setSelectedQuestion={setSelectedQuestion} />
  }
}

export default Questions