import React from 'react'
import './Nav.css'
const Navbar = (props) => {
  return (
    <div id="nav">{props.name}</div>
  )
}

export default Navbar