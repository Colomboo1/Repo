import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar"> 
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/contact">Escribime</NavLink></li>
        <li><NavLink to="/about">Sobre mi</NavLink></li>
        <li><NavLink to="/projects">Proyectos</NavLink></li>
      </ul> 
    </div>
  );
}

export default NavBar;