import React from 'react';

import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar"> 
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contacto</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Proyectos</NavLink></li>
      </ul> 
    </div>
  );
}

export default NavBar;