import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import NavBar from './components/navbar';
import React, { useEffect, useState } from 'react';
import Login from './components/login';
import Register from './components/register';
import Tutors from './components/tutors';
import Questions from './components/questions';
import Message from './components/message';
import useAuth from './hooks/useAuth';
import Profile from './components/profile';
import DocumentMeta from 'react-document-meta';

function App() {
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

  const meta = {
    title: 'Students Teach',
    description: 'Platform where students teach students.',
    meta: {
      charset: 'utf-8'
    }
  };

  return (
    <DocumentMeta {...meta}>
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
      {activePage.profile && <Profile />}
      <Message />
    </div>
    // </DocumentMeta>
  );
}

export default App;
