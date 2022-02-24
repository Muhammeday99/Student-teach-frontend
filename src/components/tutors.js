import React from 'react';
import PersonCard from './personCard';
import './styles/tutors.css'
import { BsSearch } from 'react-icons/bs';


const Tutors = () => {
  const tutors = [{
    name: 'Abdulrahman Alfawal',
    description: "Body placeholder for text paragraph, a paragraph is a self-contained unit of text description."
  },
  {
    name: 'Abdulrahman Alfawal',
    description: "Body placeholder for text paragraph, a paragraph is a self-contained unit of text description."
  },
  {
    name: 'Abdulrahman Alfawal',
    description: "Body placeholder for text paragraph, a paragraph is a self-contained unit of text description."
  },
  {
    name: 'Abdulrahman Alfawal',
    description: "Body placeholder for text paragraph, a paragraph is a self-contained unit of text description."
  }]

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
          return <PersonCard name={card.name} description={card.description} />
        })}
      </div>
    </div>
  )
}

export default Tutors