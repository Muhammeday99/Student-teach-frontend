import React, { useEffect, useState } from 'react';
import './styles/login.css'
import useAuth from '../hooks/useAuth';
import LoginViaGoogle from './loginViaGoogle';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signInGoogle } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  }

  return (
    <>
      <form className='loginContainer'>
        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='email' />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='email' />
        <button className='btnSecondary' type='submit' onClick={(e) => handleSubmit(e)}>Log in</button>
        <LoginViaGoogle />
      </form>
    </>
  )
}

export default Login