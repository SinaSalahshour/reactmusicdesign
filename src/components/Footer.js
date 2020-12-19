import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";
import Twitter from "../images/twitter.svg";
import Facebook from "../images/facebook.svg";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <nav className="footer-nav">
          <ul>
            <li>
              <NavLink to="#">About Us</NavLink>
            </li>
            <li>
              <NavLink to="#">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <nav className="footer-nav">
          <ul>
            <li>
              <NavLink to="#" className="social-link">
                <img src={Twitter} alt="" />
                Twitter
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="social-link">
                <img src={Facebook} alt="" />
                Facebook
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
