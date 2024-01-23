import React from 'react'
import Profile from './assets/profileImg1.jpg'



const Card = () => {
  return (
    <div className='card'>
    <img className='img-profile'src={Profile} alt='profile picture'></img>
     <h2 className='card-tittle'>Unmesh Pawar</h2>
     <p className='card-text'>I am a Front-End Developer</p>
    </div>
  )
}

export default Card