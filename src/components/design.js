import React from 'react';
import sysImg from '../assets/sys.png'
import './styles/design.css'

const SysDesign = () => {
  return <div className='container'>
    <div className='left'>
      <h1>Our System Design</h1>
      <span>We use the best technologies in a way that can serve multiple users with high quality.</span>
    </div>
    <div>
      <img src={sysImg} />
    </div>
  </div>
}

export default SysDesign