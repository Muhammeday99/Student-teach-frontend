import React, { useEffect, useState } from 'react';
import axiosInt from '../utils/axios';
import './styles/questionCard.css'
import './styles/questions.css'

const Question = (props) => {

  const { _id,title, subjects, description, isSolved,student, comments } = props.question
  const [author, setAuthor] = useState('')
  const [newComment,setNewComment] = useState('')
  useEffect(() => {
    axiosInt.get('/tutors/' + student).then((res) => {
      setAuthor(res.data)
    }) 
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInt.post(`'/questions/${_id}/comments`,{content:newComment}).then((res)=>console.log(res))
  }
  return (<div className='qContainer'>
    <div className='qCardContainer' style={{border:'none', borderBottom:'solid 2px black', borderRadius:'0'}}>
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
        <div className=''>
          <p>{comments.length + ' Comments'}</p>
          <p className='solved'>
            Solved</p>
        </div>
        {author &&<div className='footerRight'>{author.fullName}</div>}
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
    <form className='qCardContainer'>
      <input type='text' placeholder="Write your answer..." className='search' onChange={(e)=>{setNewComment(e)}}/>
      <div style={{ display:'flex',width:'100%' ,justifyContent:'end'}}>
        <button className='btnSecondary' onClick={(e) => handleSubmit(e)}>Post</button>
      </div>
    </form>
  </div>)
}

export default Question