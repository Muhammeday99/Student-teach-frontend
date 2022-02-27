import React from 'react';
import './styles/design.css'

const DBDesign = () => {
  return <div className='container max-width-1100'>
    <div className='dbdesign-image-container'>
      <img src="/images/database-structure.png" className='main-image' />
    </div>
    <div className='left'>
      <h1>Our Database Structure</h1>
      <span>Designed to handle data in the best way.</span>
    </div>
  </div>
}

export default DBDesign