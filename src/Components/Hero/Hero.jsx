import React from "react";
import "./Hero.css";
// import profile_img from '../../assets/profile_img.jpg'
import profile_img from "../../assets/about_profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        <span>I'm Debasisha Behera,</span> MERN Stack Full Stack Developer.
      </h1>
      <p>
        I am Passionate full stack developer eager to build scalable web
        applications using MongoDB, Express.js, React, and Node.js.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={85} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
