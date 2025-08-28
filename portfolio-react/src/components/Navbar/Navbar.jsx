import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Hello, I am here</h1>

      {/* Logo */}
      <img src={logo} alt="Logo" className="Nav-logo" />

      {/* Menu */}
      <ul className="Nav-Menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      {/* Connect Section */}
      <div className="Nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar
