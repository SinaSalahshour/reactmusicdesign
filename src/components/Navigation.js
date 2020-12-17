import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "./styles.css";

const Navigation = () => {
  return (
    <header className="main-header">
      <NavLink to="/" className="brand-logo">
        <img src={logo} alt="" />
        <div className="brand-logo-name">SoundWave</div>
      </NavLink>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/discover">Discover</NavLink>
          </li>
          <li>
            <NavLink to="/join">Join</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
