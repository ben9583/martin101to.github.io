import React from 'react'
import '../styles.css'
import kevin from './kevin.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

const Home = () => {
  return (
    <>
      <div className="Portrait">
        <img id='kevin-img' src={kevin} alt='Kevin Li' />
      </div>
      <div id="home-page">
        <p>Kevin Li</p>
      </div>
      <div id='brief'>
        <p>CS Student at the University of Arizona</p>
      </div>
      <div>
        <p id='links'>
          <a href='https://github.com/Martin101TO'> <FaGithub /> </a>
          <a href='https://www.linkedin.com/in/kevin-li-968b06187/'> <FaLinkedin /></a>
          <a href='mailto:liikevinn02@gmail.com'> <GrMail /> </a>
        </p>
      </div>
    </>
  )
}

export default Home
