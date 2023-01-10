import React from 'react'
import PropTypes from 'prop-types'
import { Proj } from './ProjectElements'

function Project (props) {
  return (
    <Proj>
      <div className='ProjectTitle'> {props.title} </div>
      <div className='ProjectContent'> {props.content} </div>
    </Proj>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Project
