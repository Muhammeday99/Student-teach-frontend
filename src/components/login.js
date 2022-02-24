import React, { useState } from 'react';
import './styles/login.css'
import { BsGoogle } from 'react-icons/bs';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  }

  return (
    <form className='loginContainer' onSubmit={(e) => handleSubmit(e)}>
      <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='email' />
      <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='email' />
      <button className='btnSecondary' type='submit'>Log in</button>
      <button className='btnSecondary'><BsGoogle />&nbsp; Login with Google </button>
    </form>
  )
}

export default Login