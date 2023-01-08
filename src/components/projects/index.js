import React from 'react'
import { Proj } from './ProjectElements'

function Project (props) {
  return (
    <>
      <Proj>
        <div className='ProjectTitle'>
          Project Title
        </div>
        <div className='ProjectContent'>
          Project Content
        </div>
        <div className='ProjectLink'>
          Project Links
        </div>
      </Proj>
    </>
  )
}

export default Project
