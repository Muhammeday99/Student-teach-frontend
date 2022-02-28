import React, { useEffect, useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import axiosInt from '../utils/axios';
import './styles/questionCard.css'

const QuestionCard = (props) => {
  const { title, subjects, description, student,isSolved, comments } = props.question
  
  const [author, setAuthor] = useState('')
  useEffect(() => {
    axiosInt.get('/tutors/' + student).then((res) => {
      setAuthor(res.data)
    }) 
  },[]);

  return (<div className='qCardContainer' onClick={props.onClick}>
    <div className='cardHeader'>
      <span className='cardTitle'>
        {title}
      </span>
      <div className='cardTags'>
        {subjects.map((tag) => {
          return <div className='tag'>{tag.title}</div>
        })}
      </div>
    </div>
    <div className='cardDescription'>
      <span>{description}</span>
    </div>
    <div className='cardFooter'>
      <div className='footerLeft'>
        <span>{comments.length + ' Comments'}</span>
        {isSolved &&
          <span className='solved'>
            Solved
          </span>
        }
      </div>
      {author && <div className='footerRight'>{author.fullName}</div>}
    </div>
  </div>)
}

export default QuestionCard