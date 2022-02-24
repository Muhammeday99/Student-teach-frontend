import React from 'react';
import docker from '../assets/docker.png'
import express from '../assets/express.png'
import js from '../assets/js.png'
import mongo from '../assets/MongoDB_Logo.png'
import r from '../assets/React.png'
import './styles/tech.css'

const TechList = () => {
  const imgList = [docker, js, express, mongo, r]

  return (<div className='techContainer'>
    <h1>Technologies used</h1>
    <div className='imgContainer'>
      {imgList.map(item => {
        return <img key={item} src={item} />
      })}
    </div>
  </div>)
}

export default TechList