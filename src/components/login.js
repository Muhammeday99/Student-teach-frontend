import React from 'react';
import './styles/login.css'
import { BsGoogle } from 'react-icons/bs';

const Login = () => {
  return <div className='loginContainer'>
    <input type='text' placeholder='Email' className='email'/>
    <input type='password' placeholder='Password' className='email'/>
    <button className='btnSecondary'><div>Log in</div></button>
    <button className='btnSecondary'><div><BsGoogle />&nbsp; Login with Google </div></button>
  </div>
}

export default Login