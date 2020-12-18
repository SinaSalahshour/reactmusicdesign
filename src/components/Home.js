import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import "./styles.css"

const Home = () => {
  return (
    <>
    <div className="home-main-section">
      <div className="img-wrapper">
        <div className="lady-image"></div>
      </div>
      <div className="call-to-action">
        <h1 className="title">Feel The Music</h1>
        <span className="subtitle">
          Stream over 20 thousand songs with one click
        </span>
        <Link to="/join" className="btn">
          Join Now
        </Link>
      </div>
    </div>
    <div className="home-page-circle-1"></div>
    <div className="home-page-circle-2"></div>
    <div className="home-page-circle-3"></div>
    </>
  );
};

export default Home;
