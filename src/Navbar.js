import React from "react"
import { Link } from "react-router-dom"

const Navbar = () =>{
  
  return(
    <>
      <nav className="indigo darken-1">
        <div class="container nav-wrapper">
          <Link to="/" class="brand-logo">Pizzeria</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/add" className="waves-effect waves-light btn indigo lighten-1">Add Pizza</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )

}

export default Navbar