import React from 'react';
import logo from '../assets/Stylelogo.png'
import './styles/navbar.css'

const NavBar = (props) => {
  const menuButtonList = ['Home','Tutors', 'Questions']
  return (
    <div className='nav'>
      <img src={logo} onClick={() => {
          props.setPage('home')
        }} width='72' />
      <div className='navBtnContainer'>
      {menuButtonList.map((item) => {
        return <span onClick={() => {
          props.setPage(item.toLowerCase())
        }}>{item}</span>
      })}
      </div>
      <div className='navBtnContainer' style={{width: '10%'}}>
        <button className='btnPrimary' onClick={() => {
          props.setPage('register')
        }}>Register</button>
        <button className='btnSecondary' onClick={() => {
          props.setPage('login')
        }}>Sign In</button>
      </div>
    </div>
  )
}

export default NavBar