import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from "react-router-dom"
import logo from "../images/tomjerry1.jpg"

const Navbar = () => {
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{paddingLeft:"10px"}}>
    <NavLink className="nav-link" aria-current="page" to="/">
    <img className="logo" src={logo} alt="img"></img>
    </NavLink>
      
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto" style={{marginLeft:"1050px",fontSize:"18px"}}>
        <li className="nav-item active">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>

        <li className="nav-item active">
          <NavLink className="nav-link" aria-current="page" to="/basic">Basic</NavLink>
        </li>

        <li className="nav-item active">
          <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
        </li>

        <li className="nav-item active">
          <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
        </li>

        <li className="nav-item active">
          <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
        </li>

        <li className="nav-item active">
          <NavLink className="nav-link" aria-current="page" to="/signup">Register</NavLink>
        </li>
        
      </ul>
    </div>
</nav>
        </div>
    )
}

export default Navbar