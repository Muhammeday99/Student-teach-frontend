import React from 'react';
import './styles/gettingStarted.css'
import star from '../assets/Stylestar.png'
import {BsGoogle} from 'react-icons/bs'


const GettingStarted = () => {
  return (<div className='container'>
    <div className='gettingStarted'>
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.556 14.6758L22.1698 2.81984C23.7396 -0.495592 28.2707 -0.495478 29.8404 2.82003L35.4534 14.6758L48.0087 16.5772C51.519 17.1088 52.92 21.6109 50.3786 24.193L41.2967 33.4202L43.4398 46.4481C44.0395 50.094 40.3731 52.8752 37.2346 51.1553L26.005 45.0014L14.7746 51.1553C11.636 52.8752 7.96959 50.0937 8.56954 46.4479L10.7134 33.42L1.63156 24.193C-0.90982 21.6109 0.491107 17.1089 4.00138 16.5772L16.556 14.6758Z" fill="#1A1A1A" />
      </svg>
      <h1>Students Teach Students</h1>
      <span>Connect students with other students and to create an environment where students help each other out!</span>
      <div className='buttonContainer'>
        <button className='btnPrimary'>Get Started</button>
        <button className='btnSecondary'><BsGoogle />&nbsp; Login with Google</button>
      </div>
    </div>
  </div>)
}

export default GettingStarted