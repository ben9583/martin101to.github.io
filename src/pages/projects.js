import React from 'react'
import Project from '../components/projects'

const Projects = () => {
  return (
    <>
      <div className='PageTitle'>
        <h1>Projects</h1>
      </div>
      <div id='project-holder'>
        <Project title="Tweepy-Martin" content="This project uses Tweepy and the Twitter API to pull tweets for setiment analysis."/>
      </div>
    </>
  )
}

export default Projects
