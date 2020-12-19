import React, { useEffect } from "react";

import "./styles.css";
import "./Discover.css";
import Footer from "./Footer";

import Microphone from "../images/microphone.svg";
import Albums from "../images/albums.svg";
import More from "../images/more.svg";
import Covers from '../images/covers.jpg';

const Discover = () => {
  useEffect(() => {
    document.getElementById("root").classList.add("container");
    document.body.classList.remove("container");
  }, []);

  return (
    <>
      <section className="discover-main-section">
        <div className="call-to-action">
          <h1 className="title">Discover New Music</h1>
          <div className="icon-section">
            <div className="icon">
              <img src={Microphone} alt="" />
              Charts
            </div>
            <div className="icon">
              <img src={Albums} alt="" />
              Albums
            </div>
            <div className="icon">
              <img src={More} alt="" />
              More
            </div>
          </div>
          <div>
            By joining you can benefit by listening to the latest albums
            released.
          </div>
        </div>
        <img className="cover-images" src={Covers} alt=""/>
      </section>
      <Footer />
    </>
  );
};

export default Discover;
