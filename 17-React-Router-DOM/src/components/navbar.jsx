import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='nav'>
        <h3>visit our page</h3>
        <div className='nav-bar'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default navbar
