import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "./styles.css";

const Navigation = () => {
  return (
    <header className="main-header">
      <a href="/" className="brand-logo">
        <img src={logo} alt="" />
        <div className="brand-logo-name">SoundWave</div>
      </a>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="/discover">Discover</a>
          </li>
          <li>
            <a href="/join">Join</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
