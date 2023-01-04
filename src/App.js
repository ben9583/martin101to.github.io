import React from 'react'
import './index.js'
import Navbar from './components/navbar'
import { HashRouter as Router, Routes, Route }
  from 'react-router-dom'
import Home from './pages'
import About from './pages/about'
import Blog from './pages/blog'
import Contact from './pages/contact'
import Toolbox from './pages/toolbox'
import Projects from './pages/projects'
import Copyright from './components/copyright'

function App () {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/toolbox' element={<Toolbox/>} />
      </Routes>
      <Copyright />
    </Router>
  )
}

export default App
