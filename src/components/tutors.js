import React, { useState,useEffect } from 'react';
import PersonCard from './personCard';
import './styles/tutors.css'
import { BsSearch } from 'react-icons/bs';
import axiosInt from '../utils/axios'


const Tutors = () => {
  const [tutors,setTutors] = useState([])
  
  useEffect(() => {
    axiosInt.get('/tutors/').then((res) => {
      console.log(res);
      setTutors(res.data)
    }) 
  },[]);

  return (
    <div>
      <div class="subNav">
        <div className='filter'>
          <span style={{fontSize:'larger'}}>Type</span>
          <select className='select'>
            <option>Math</option>
            <option>Physics</option>
            <option>Science</option>
          </select>
        </div>
        <div className='searchContainer'>
          <BsSearch size='30' />
          <input type='search' placeholder='Search' className='search'/>
        </div>
      </div>
      <div className='cardsContainer'>
        {tutors.map(card => {
          return <PersonCard name={card.fullName} />
        })}
      </div>
    </div>
  )
}

export default Tutors