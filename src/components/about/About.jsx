import React from "react";
import "./about.css";
import Award from "../../img/award.jpg";
import FT1 from "../../img/myft1.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={FT1} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          My name is Phoo Pyae Pyae Soe, and I am from Myanmar. While I was in
          Myanmar, I attended the University of Information Technology in
          Yangon.
        </p>
        <p className="a-desc">
          Now , I am studying in Ragsit University majoring in ICT . My passion
          is to develop websites as a web developer
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Fully attendance award</h4>
            <p className="a-award-desc">
              2016 , University of Information Technology , Yangon , Myanmar
            </p>
            <p>
              <a href="https://www.uit.edu.mm" className="a-link">
                https://www.uit.edu.mm
              </a>
            </p>
          </div>
        </div>
        <a href="#" class="css-button-arrow--green">
          See More
        </a>
      </div>
    </div>
  );
};

export default About;
