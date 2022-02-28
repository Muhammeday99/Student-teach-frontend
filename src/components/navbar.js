import React from 'react';
import logo from '../assets/Stylelogo.png'
import useAuth from '../hooks/useAuth';
import './styles/navbar.css'

const NavBar = (props) => {
  const { user, isAuthenticated } = useAuth();
  let avatarUrl = "/avatar.png";

  const menuButtonList = ['Home', 'Tutors', 'Questions']
  return (
    <div className='nav'>
      <img src={logo} onClick={() => {
        props.setPage('home')
      }} width='72' />
      <div className='navBtnContainer'>
        {menuButtonList.map((item) => {
          return <a key={item} onClick={() => {
            props.setPage(item.toLowerCase())
          }}>{item}</a>
        })}
      </div>
      {
        isAuthenticated ?
          <>
            <button className='profile-container'>
              <img src={avatarUrl} width={40} height={40}></img>
              <p>{user.firstName}</p>
            </button>
            <div className=''>
            </div>
          </>
          :
          <div className='navBtnContainer'>
            <button className='btnPrimary' onClick={() => {
              props.setPage('register')
            }}>Register</button>
            <button className='btnSecondary' onClick={() => {
              props.setPage('login')
            }}>Sign In</button>
          </div>
      }
    </div>
  )
}

export default NavBar