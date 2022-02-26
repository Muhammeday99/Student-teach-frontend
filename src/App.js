import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import NavBar from './components/navbar';
import React, { useState } from 'react';
import Login from './components/login';
import Register from './components/register';
import Tutors from './components/tutors';
import Questions from './components/questions';
import Message from './components/message';
import useAuth from './hooks/useAuth';

function App() {
  // TODO: if auth context has user, show profile component rather than login - register 
  const { isAuthenticated } = useAuth();
  const [activePage, setActivePage] = useState({
    home: true,
    login: false,
    register: false,
    tutors: false,
    questions: false,
    profile: false
  })
  const prevPage = () => {
    return Object.keys(activePage).filter((key) => activePage[key] === true)[0]
  }

  return (
    <div className="App">
      <NavBar setPage={(page) => {
        const prev = prevPage()
        setActivePage({ ...activePage, [prev]: false, [page]: true })
      }}
      />
      {activePage.home && <Landing />}
      {activePage.login && !isAuthenticated && <Login />}
      {activePage.register && !isAuthenticated && <Register />}
      {(activePage.login || activePage.register || activePage.profile) && isAuthenticated && <Landing />}
      {activePage.tutors && <Tutors />}
      {activePage.questions && <Questions />}
      <Message />
    </div>
  );
}

export default App;
