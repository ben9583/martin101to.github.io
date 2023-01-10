import React from 'react'
import Project from '../components/projects'

function Projects (props) {
  return (
    <>
      <div className='PageTitle'>
        <h1>Future projects page from Martin101TO</h1>
      </div>
      <div id='project-holder'>
        <Project title="Project 1" content="tessting"/>
        <Project title="Project 2" content="tessting"/>
      </div>
    </>
  )
}

export default Projects
