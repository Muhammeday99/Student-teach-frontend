import React from 'react';
import swagger from '../assets/swagger.png'
import './styles/tech.css'

const Documentation = () => {
  return (<div className='techContainer'>
    <h1>Technologies used</h1>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <img src={swagger} />
      <div style={{padding:  '10px', display: 'flex', alignItems: 'center', marginLeft: '20px'}}>
      <button className='btnSecondary'>Read now</button>
      </div>
      </div>
  </div>)
}

export default Documentation