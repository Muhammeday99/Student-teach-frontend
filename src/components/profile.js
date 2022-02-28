import React from 'react';
import QuestionCard from './questionCard';

const Profile = (props) => {
  const { name, avatar, questions, tags } = props
  return (<div className='profile-container'>
    <div className='profile-left'>
      <div className='avatar-container'>
        <img src={avatar} className='avatar' />
        <span>{name}</span>
        <div className='tags-container'>
          {tags.map(tag => <div className='tag'>{tag}</div>)}
        </div>
        <input type='checkbox'>Receive teaching offers</input>
      </div>
    </div>
    <div className='profile-right'>
      <div className='right-header'>
        <h1>Asked Questions</h1>
        <span>{questions.length}&nbsp; Questions</span>
      </div>
      <div>
        {questions.map(item => {
          return <QuestionCard question = {item} />
        })}
      </div>
    </div>
  </div>)
}


export default Profile