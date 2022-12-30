import React from 'react'
import './index.js'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom'
import Home from './pages'
import About from './pages/about'
import Blog from './pages/blog'
import Contact from './pages/contact'
import Toolbox from './pages/toolbox'
import Projects from './pages/projects'

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/toolbox' element={<Toolbox/>} />
        <Route path='/projects' element = {<Projects/>}/>
      </Routes>
    </Router>
  )
}

export default App
