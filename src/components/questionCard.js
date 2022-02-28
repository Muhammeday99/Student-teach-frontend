import React from 'react';
import { BsCheck } from 'react-icons/bs';
import './styles/questionCard.css'

const QuestionCard = (props) => {
  const { title, tags, description, author, isSolved, comments } = props.question
  
  return (<div className='qCardContainer' onClick={props.onClick}>
    <div className='cardHeader'>
      <span className='cardTitle'>
        {title}
      </span>
      <div className='cardTags'>
        {tags.map((tag) => {
          return <div className='tag'>{tag}</div>
        })}
      </div>
    </div>
    <div className='cardDescription'>
      <span>{description}</span>
    </div>
    <div className='cardFooter'>
      <div className='footerLeft'>
        <span>{comments.length + ' Comments'}</span>
        <span className='solved'>
          Solved</span>
      </div>
      <div className='footerRight'>{author.name}</div>
    </div>
  </div>)
}

export default QuestionCard