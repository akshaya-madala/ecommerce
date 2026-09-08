import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <h1>
            <Link to ="/">Logo</Link></h1>
        <ul>
            <li>
                <Link to ="/login">Login</Link>
            </li>
            <li>
                <Link to ="/signup">Signup</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar