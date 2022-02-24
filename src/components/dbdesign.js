import React from 'react';
import sysImg from '../assets/db.png'
import './styles/design.css'

const DBDesign = () => {
  return <div className='container'>
    <div>
      <img src={sysImg} />
    </div>
    <div className='left'>
      <h1>Our Database Structure</h1>
      <span>Our database is designed to handle everything in the best way.</span>
    </div>
  </div>
}

export default DBDesign