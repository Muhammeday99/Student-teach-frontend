import React from 'react';
import './styles/questionCard.css'
import './styles/questions.css'

const Question = (props) => {

  const { title, tags, description, author, isSolved, comments } = props.question

  return (<div className='qContainer'>
    <div className='qCardContainer' style={{border:'none', borderBottom:'solid 2px black', borderRadius:'0'}}>
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
    </div>
    <div>
      {comments.map((comment) => {
        return <div style={{margin:'2rem'}}>
          <div className='cardHeader'>
            <span className='cardTitle'>
              {comment.creator.fullName}
            </span>
          </div>
          <div style={{display:'flex',alignItems:'flex-start', marginLeft:'2rem'}}>
            {comment.content}
          </div>
        </div>
      })}
    </div>
    <div className='qCardContainer'>
      <input type='text' placeholder="Write your answer..." className='search'/>
      <div style={{ display:'flex',width:'100%' ,justifyContent:'end'}}>
        <button className='btnSecondary'>Post</button>
      </div>
    </div>
  </div>)
}

export default Question