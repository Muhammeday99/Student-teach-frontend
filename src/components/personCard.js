import React from 'react';
import a from '../assets/avatar.png'
import './styles/personCard.css'



const PersonCard = (props) => {
  let { avatar, name, description } = props
  if (!avatar) {
    avatar = a
  }
  return (
    <div className='cardContainer'>
      <div className='avatarContainer'>
      <img src={avatar} className='avatar'/>
      </div>
      <h3>{name}</h3>
      {description && <div className='description'>
        {description}
      </div>}
    </div>
  )
}

export default PersonCard